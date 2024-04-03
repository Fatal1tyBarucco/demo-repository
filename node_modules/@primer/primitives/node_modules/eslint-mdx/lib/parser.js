"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseForESLint = exports.parse = exports.parser = exports.Parser = exports.MARKDOWN_EXTENSIONS = exports.DEFAULT_EXTENSIONS = void 0;
const tslib_1 = require("tslib");
const node_path_1 = tslib_1.__importDefault(require("node:path"));
const helpers_1 = require("./helpers");
const sync_1 = require("./sync");
exports.DEFAULT_EXTENSIONS = ['.mdx'];
exports.MARKDOWN_EXTENSIONS = ['.md'];
class Parser {
    constructor() {
        this.parse = this.parse.bind(this);
        this.parseForESLint = this.parseForESLint.bind(this);
    }
    parse(code, options) {
        return this.parseForESLint(code, options).ast;
    }
    parseForESLint(code, { filePath, sourceType, ignoreRemarkConfig, extensions, markdownExtensions, }) {
        const extname = node_path_1.default.extname(filePath);
        const isMdx = [...exports.DEFAULT_EXTENSIONS, ...(0, helpers_1.arrayify)(extensions)].includes(extname);
        const isMarkdown = [
            ...exports.MARKDOWN_EXTENSIONS,
            ...(0, helpers_1.arrayify)(markdownExtensions),
        ].includes(extname);
        if (!isMdx && !isMarkdown) {
            throw new Error('Unsupported file extension, make sure setting the `extensions` or `markdownExtensions` option correctly.');
        }
        const physicalFilename = (0, helpers_1.getPhysicalFilename)(filePath);
        let result;
        try {
            result = (0, sync_1.performSyncWork)({
                fileOptions: {
                    path: physicalFilename,
                    value: code,
                },
                physicalFilename,
                isMdx,
                ignoreRemarkConfig,
            });
        }
        catch (err) {
            if (process.argv.includes('--debug')) {
                console.error(err);
            }
            const { message, line, column, place } = err;
            const point = place && ('start' in place ? place.start : place);
            throw Object.assign(new SyntaxError(message, {
                cause: err,
            }), {
                lineNumber: line,
                column,
                index: point === null || point === void 0 ? void 0 : point.offset,
            });
        }
        const { root, body, comments, tokens } = result;
        return {
            ast: Object.assign(Object.assign({}, (0, helpers_1.normalizePosition)(root.position)), { type: 'Program', sourceType,
                body,
                comments,
                tokens }),
        };
    }
}
exports.Parser = Parser;
exports.parser = new Parser();
exports.parse = exports.parser.parse, exports.parseForESLint = exports.parser.parseForESLint;
//# sourceMappingURL=parser.js.map