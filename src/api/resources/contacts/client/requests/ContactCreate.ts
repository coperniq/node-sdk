/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         name: "name"
 *     }
 */
export interface ContactCreate {
    /** Contact's full name */
    name: string;
    /** List of contact phone numbers */
    phones?: string[];
    /** List of contact email addresses */
    emails?: string[];
}
