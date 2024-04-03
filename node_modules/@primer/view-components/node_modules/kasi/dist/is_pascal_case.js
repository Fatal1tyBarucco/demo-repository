/* IMPORT */
import toPascalCase from './to_pascal_case.js';
/* MAIN */
const isPascalCase = (value) => {
    return value === toPascalCase(value);
};
/* EXPORT */
export default isPascalCase;
