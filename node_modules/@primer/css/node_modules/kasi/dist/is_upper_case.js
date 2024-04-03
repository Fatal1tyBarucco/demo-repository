/* IMPORT */
import toUpperCase from './to_upper_case.js';
/* MAIN */
const isUpperCase = (value) => {
    return value === toUpperCase(value);
};
/* EXPORT */
export default isUpperCase;
