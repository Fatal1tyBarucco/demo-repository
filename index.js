const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs-extra');
const semver = require('semver');
const dedent = require('dedent');

/* const express = require('express');
const app = express();
const path = require('path');

var PORT = process.env.port || 3001;

const SLDS_DIR = '/node_modules/@salesforce-ux/design-system/assets';

app.use('/slds', express.static(__dirname + SLDS_DIR));

app.get('/', function (req, res) {
  //res.send('Hello World!');
  res.sendFile(path.resolve('index.html'));
});
app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}`);
}); */

const express = require('express');
const app = express();
const path = require('path');
const rateLimit = require('express-rate-limit');

var PORT = process.env.port || 3001;

const SLDS_DIR = '/node_modules/@salesforce-ux/design-system/assets';

// Configure rate limiting middleware (adjust windowMs and max as needed)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,                // Allow up to 100 requests per window
  // Customize the response for exceeded limits (optional)
  handler: (req, res, next, options) => {
    res.status(options.statusCode).json({
      error: 'Too Many Requests',
      message: 'Please try again later.'
    });
  }
});

// Apply rate limiting to all requests
app.use(limiter);

app.use('/slds', express.static(__dirname + SLDS_DIR));

// Improved error handling for file serving
app.get('/', function (req, res) {
  res.sendFile(path.resolve('index.html'))
    .catch(err => {
      console.error(err);
      res.status(500).send('Error serving index.html');
    });
});

// Handle other valid paths with potential improvements (consider path validation)
app.get('/:path', function(req, res) {
  const requestedPath = path.join(__dirname, req.params.path); // Construct absolute path

  // Optional path validation (consider using a dedicated library like 'path-match')
  if (isValidPath(requestedPath)) { // Implement your validation logic here
    res.sendFile(requestedPath)
      .catch(err => {
        console.error(err);
        res.status(404).send('Invalid or non-existent path');
      });
  } else {
    res.status(400).send('Invalid path');
  }
});

app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}`);
});

const main = async () => {
    try {
        const {draft: isDraft, prerelease: isPrerelease, tag_name: gitTag} = github.context.payload.release;
        const gitTagWithoutV = gitTag.slice(1);
        const packageJson = await fs.readJson('./package.json');
        const packageJsonVersion = packageJson?.version;

        if (isDraft) {
            core.setFailed('Release is a draft. Skip publish.');

            return;
        }

        if (!packageJsonVersion) {
            core.setFailed('Package.json is missing version.');

            return;
        }

        if (!gitTag.startsWith('v')) {
            core.setFailed('Release git tag does not start with `v`, ie. `v1.2.3`.');

            return;
        }

        if (gitTagWithoutV !== packageJsonVersion) {
            core.setFailed(
                dedent(`
                    Release git tag does not match package.json version.
                    Release git tag: ${gitTagWithoutV}
                    Package.json version: ${packageJsonVersion}
                `)
            );

            return;
        }

        if (!semver.valid(gitTagWithoutV)) {
            core.setFailed('Release git tag and package.json versions are not valid semver.');

            return;
        }

        const semverPrerelease = semver.prerelease(gitTagWithoutV);
        const hasSemverPrerelease = semverPrerelease !== null;

        let versionTag = '';

        if (isPrerelease && !hasSemverPrerelease) {
            core.setFailed(
                'Release in GitHub is marked as `pre-release`, but release git tag and package.json versions do not follow pre-release format, ie. `1.2.3-beta.1'
            );

            return;
        }

        if (!isPrerelease && hasSemverPrerelease) {
            core.setFailed(
                'Release git tag and package.json versions follow pre-release format, ie. `1.2.3-beta.1, but release in GitHub is not marked as `pre-release`.'
            );

            return;
        }

        if (isPrerelease && hasSemverPrerelease) {
            versionTag += semverPrerelease[0];
        }

        core.setOutput('version', gitTagWithoutV);
        core.setOutput('tag', versionTag);
    } catch (error) {
        core.setFailed(error.message);
    }
};

if (require.main === module) {
    main();
} else {
    module.exports = main;
}
