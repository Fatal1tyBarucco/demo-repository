/* IMPORT */
import toSpaceCase from './to_space_case.js';
/* MAIN */
const toPathCase = (value) => {
    return toSpaceCase(value).replaceAll(' ', '/');
};
/* EXPORT */
export default toPathCase;
