/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CoperniqApi from "../index";

export interface Contact {
    /** Contact identifier */
    id: number;
    /** Company identifier */
    companyId?: number;
    /** Contact's full name */
    name?: string;
    /** List of contact email addresses */
    emails?: string[];
    /** List of contact phone numbers */
    phones?: string[];
    createdBy?: CoperniqApi.ContactCreatedBy;
    /** Creation timestamp */
    createdAt: Date;
    /** Last update timestamp */
    updatedAt: Date;
}
