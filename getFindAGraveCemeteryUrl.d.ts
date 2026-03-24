export declare const FindAGraveCemeteryBaseUrl = "https://www.findagrave.com/cemetery/";
/**
 * Returns the URL for a Find A Grave cemetery given its ID.
 * @param findAGraveCemeteryId The ID of the Find A Grave cemetery. If null, returns undefined.
 * @returns The URL of the Find A Grave cemetery, or undefined if the ID is null.
 */
export default function getFindAGraveCemeteryUrl(findAGraveCemeteryId: number | null): string | undefined;
