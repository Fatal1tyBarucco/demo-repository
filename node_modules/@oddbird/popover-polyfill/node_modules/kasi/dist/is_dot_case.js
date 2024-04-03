/* IMPORT */
import toDotCase from './to_dot_case.js';
/* MAIN */
const isDotCase = (value) => {
    return value === toDotCase(value);
};
/* EXPORT */
export default isDotCase;
