/* IMPORT */
import toSpaceCase from './to_space_case.js';
/* MAIN */
const toSnakeCase = (value) => {
    return toSpaceCase(value).replaceAll(' ', '_');
};
/* EXPORT */
export default toSnakeCase;
