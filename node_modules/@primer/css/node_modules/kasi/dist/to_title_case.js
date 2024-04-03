/* IMPORT */
import toSpaceCase from './to_space_case.js';
/* HELPERS */
const upperRe = /^\w|\s\w/g;
/* MAIN */
const toTitleCase = (value) => {
    return toSpaceCase(value).replaceAll(upperRe, _ => _.toUpperCase());
};
/* EXPORT */
export default toTitleCase;
