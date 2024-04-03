/* IMPORT */
import toConstantCase from './to_constant_case.js';
/* MAIN */
const isConstantCase = (value) => {
    return value === toConstantCase(value);
};
/* EXPORT */
export default isConstantCase;
