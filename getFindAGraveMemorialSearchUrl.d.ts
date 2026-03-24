/**
 * Generates a Find A Grave memorial search URL based on the provided cemetery ID, deceased name, and optional filters.
 * @param findAGraveCemeteryId The ID of the cemetery on Find A Grave. If null, the function returns undefined.
 * @param deceasedName The name of the deceased, which can be either a string or an object containing optional first and last name properties.
 * @param additionalFilters Optional filters for the search, including birth year and death year.
 * @param additionalFilters.birthYear The birth year of the deceased, which can be used to narrow down search results.
 * @param additionalFilters.deathYear The death year of the deceased, which can be used to narrow down search results.
 * @returns The URL for the Find A Grave memorial search, or undefined if the cemetery ID is null.
 */
export declare function getFindAGraveMemorialSearchUrl(findAGraveCemeteryId: number | null, deceasedName: {
    first?: string;
    last?: string;
} | string, additionalFilters?: {
    birthYear?: number;
    deathYear?: number;
}): string | undefined;
