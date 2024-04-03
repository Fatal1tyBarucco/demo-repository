/* IMPORT */
import isLowerCase from './is_lower_case.js';
import toLowerCase from './to_lower_case.js';
import toUpperCase from './to_upper_case.js';
/* HELPERS */
const copy = (prev, next) => {
    if (!prev.length || !next.length)
        return next;
    if (prev.length !== next.length)
        return next;
    const prevChars = prev.split('');
    const nextChars = next.split('');
    for (let i = 0, l = prevChars.length; i < l; i++) {
        const prevChar = prevChars[i];
        const nextChar = nextChars[i];
        const toCase = isLowerCase(prevChar) ? toLowerCase : toUpperCase;
        nextChars[i] = toCase(nextChar);
    }
    return nextChars.join('');
};
/* EXPORT */
export default copy;
