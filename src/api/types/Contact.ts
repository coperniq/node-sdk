/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface Contact {
    /** Contact identifier */
    id: string;
    /** Contact's first name */
    firstName: string;
    /** Contact's last name */
    lastName: string;
    /** Contact's email address */
    email?: string;
    /** Contact's phone number */
    phone?: string;
    /** Creation timestamp */
    createdAt: Date;
    /** Last update timestamp */
    updatedAt: Date;
}
