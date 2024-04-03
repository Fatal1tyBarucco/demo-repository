/* IMPORT */
import toCamelCase from './to_camel_case.js';
/* MAIN */
const isCamelCase = (value) => {
    return value === toCamelCase(value);
};
/* EXPORT */
export default isCamelCase;
