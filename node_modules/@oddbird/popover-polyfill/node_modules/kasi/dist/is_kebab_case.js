/* IMPORT */
import toKebabCase from './to_kebab_case.js';
/* MAIN */
const isKebabCase = (value) => {
    return value === toKebabCase(value);
};
/* EXPORT */
export default isKebabCase;
