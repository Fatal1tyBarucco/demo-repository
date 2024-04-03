/* IMPORT */
import toCamelCase from './to_camel_case.js';
import toConstantCase from './to_constant_case.js';
import toDotCase from './to_dot_case.js';
import toKebabCase from './to_kebab_case.js';
import toLowerCase from './to_lower_case.js';
import toPascalCase from './to_pascal_case.js';
import toPathCase from './to_path_case.js';
import toSnakeCase from './to_snake_case.js';
import toTitleCase from './to_title_case.js';
import toUpperCase from './to_upper_case.js';
/* MAIN */
const apply = (value, casing) => {
    if (casing === 'camel')
        return toCamelCase(value);
    if (casing === 'constant')
        return toConstantCase(value);
    if (casing === 'dot')
        return toDotCase(value);
    if (casing === 'kebab')
        return toKebabCase(value);
    if (casing === 'lower')
        return toLowerCase(value);
    if (casing === 'pascal')
        return toPascalCase(value);
    if (casing === 'path')
        return toPathCase(value);
    if (casing === 'snake')
        return toSnakeCase(value);
    if (casing === 'title')
        return toTitleCase(value);
    if (casing === 'upper')
        return toUpperCase(value);
    return value;
};
/* EXPORT */
export default apply;
