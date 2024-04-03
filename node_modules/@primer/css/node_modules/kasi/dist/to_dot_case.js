/* IMPORT */
import toSpaceCase from './to_space_case.js';
/* MAIN */
const toDotCase = (value) => {
    return toSpaceCase(value).replaceAll(' ', '.');
};
/* EXPORT */
export default toDotCase;
