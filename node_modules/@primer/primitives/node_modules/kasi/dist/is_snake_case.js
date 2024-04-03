/* IMPORT */
import toSnakeCase from './to_snake_case.js';
/* MAIN */
const isSnakeCase = (value) => {
    return value === toSnakeCase(value);
};
/* EXPORT */
export default isSnakeCase;
