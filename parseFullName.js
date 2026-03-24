import { parseFullName as _parseFullName } from 'parse-full-name';
import isFirstName from './isFirstName/index.js';
export const ParseFullNameDefaultOptions = Object.freeze({
    doFirstNameCheck: false
});
/**
 * Parses a full name into its components.
 * @param name The full name to parse.
 * @param options Optional settings for parsing.
 * @returns The parsed name components.
 */
export default function parseFullName(name, options) {
    const parsedName = _parseFullName(name);
    if (options?.doFirstNameCheck ??
        ParseFullNameDefaultOptions.doFirstNameCheck) {
        const firstName = parsedName.first ?? '';
        const middleName = parsedName.middle ?? '';
        const lastName = parsedName.last ?? '';
        if (!isFirstName(firstName) &&
            (isFirstName(middleName) || isFirstName(lastName))) {
            if (middleName === '') {
                parsedName.first = lastName;
                parsedName.last = firstName;
            }
            else {
                parsedName.first = middleName;
                parsedName.middle = lastName;
                parsedName.last = firstName;
            }
        }
    }
    return parsedName;
}
