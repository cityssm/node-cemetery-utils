/* eslint-disable @cspell/spellchecker */
import parseFullName from './parseFullName.js';
/**
 * Generates a Find A Grave memorial search URL based on the provided cemetery ID, deceased name, and optional filters.
 * @param findAGraveCemeteryId The ID of the cemetery on Find A Grave. If null, the function returns undefined.
 * @param deceasedName The name of the deceased, which can be either a string or an object containing optional first and last name properties.
 * @param additionalFilters Optional filters for the search, including birth year and death year.
 * @param additionalFilters.birthYear The birth year of the deceased, which can be used to narrow down search results.
 * @param additionalFilters.deathYear The death year of the deceased, which can be used to narrow down search results.
 * @returns The URL for the Find A Grave memorial search, or undefined if the cemetery ID is null.
 */
export function getFindAGraveMemorialSearchUrl(findAGraveCemeteryId, deceasedName, additionalFilters) {
    const parameters = new URLSearchParams();
    if (findAGraveCemeteryId === null) {
        return undefined;
    }
    const parsedName = typeof deceasedName === 'string'
        ? parseFullName(deceasedName)
        : deceasedName;
    parameters.append('firstname', parsedName.first ?? '');
    parameters.append('lastname', parsedName.last ?? '');
    parameters.append('birthyear', additionalFilters?.birthYear?.toString() ?? '');
    parameters.append('deathyear', additionalFilters?.deathYear?.toString() ?? '');
    return `https://www.findagrave.com/cemetery/${findAGraveCemeteryId}/memorial-search?${parameters.toString()}`;
}
