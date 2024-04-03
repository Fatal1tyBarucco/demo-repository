/* IMPORT */
import toSpaceCase from './to_space_case.js';
/* HELPERS */
const upperRe = /\s(\w)/g;
/* MAIN */
const toCamelCase = (value) => {
    return toSpaceCase(value).replace(upperRe, (_, char) => char.toUpperCase());
};
/* EXPORT */
export default toCamelCase;
