/* IMPORT */
import toLowerCase from './to_lower_case.js';
/* MAIN */
const isLowerCase = (value) => {
    return value === toLowerCase(value);
};
/* EXPORT */
export default isLowerCase;
