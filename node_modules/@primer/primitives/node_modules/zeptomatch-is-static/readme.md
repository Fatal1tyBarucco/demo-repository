# Zeptomatch Is Static

A little utility for checking if a glob is fully static.

Escapes are considered to be static, so you should probably use this package in combination with [`zeptomatch-unescape`](https://github.com/fabiospampinato/zeptomatch-unescape) to remove them.

## Install

```sh
npm install --save zeptomatch-is-static
```

## Usage

```ts
import isStatic from 'zeptomatch-is-static';

// Checking if a glob is fully static

isStatic ( 'foo' ); // true
isStatic ( 'foo/bar' ); // true
isStatic ( 'foo\\*bar' ); // true

isStatic ( '*' ); // false
isStatic ( '**' ); // false
isStatic ( 'foo*' ); // false
isStatic ( 'foo/**/*' ); // false
isStatic ( 'foo*bar' ); // false
```

## License

MIT © Fabio Spampinato
