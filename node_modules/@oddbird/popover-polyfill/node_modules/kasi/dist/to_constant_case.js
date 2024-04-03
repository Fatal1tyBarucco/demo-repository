/* IMPORT */
import toSpaceCase from './to_space_case.js';
/* MAIN */
const toConstantCase = (value) => {
    return toSpaceCase(value).replaceAll(' ', '_').toUpperCase();
};
/* EXPORT */
export default toConstantCase;
