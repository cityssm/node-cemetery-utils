import { parseFullName as _parseFullName } from 'parse-full-name';
export interface ParseFullNameOptions {
    /**
     * If true, will check if the identified first name is a known first name.
     * This can help in the case where a full name is formatted as `[last] [first]` without a comma,
     * but it can also cause false positives. Use with caution.
     */
    doFirstNameCheck: boolean;
}
export declare const ParseFullNameDefaultOptions: Readonly<ParseFullNameOptions>;
/**
 * Parses a full name into its components.
 * @param name The full name to parse.
 * @param options Optional settings for parsing.
 * @returns The parsed name components.
 */
export default function parseFullName(name: string, options?: Partial<ParseFullNameOptions>): ReturnType<typeof _parseFullName>;
