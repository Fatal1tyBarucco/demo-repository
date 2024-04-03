/* IMPORT */
import toPathCase from './to_path_case.js';
/* MAIN */
const isPathCase = (value) => {
    return value === toPathCase(value);
};
/* EXPORT */
export default isPathCase;
