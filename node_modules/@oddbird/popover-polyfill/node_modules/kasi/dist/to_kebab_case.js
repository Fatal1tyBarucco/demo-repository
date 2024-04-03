/* IMPORT */
import toSpaceCase from './to_space_case.js';
/* MAIN */
const toKebabCase = (value) => {
    return toSpaceCase(value).replaceAll(' ', '-');
};
/* EXPORT */
export default toKebabCase;
