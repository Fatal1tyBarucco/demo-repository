/* IMPORT */
import toTitleCase from './to_title_case.js';
/* MAIN */
const isTitleCase = (value) => {
    return value === toTitleCase(value);
};
/* EXPORT */
export default isTitleCase;
