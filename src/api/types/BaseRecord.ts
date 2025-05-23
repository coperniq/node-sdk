/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface BaseRecord {
    /** Unique identifier */
    id?: number;
    /** Creation timestamp */
    createdAt?: Date;
    /** Last update timestamp */
    updatedAt?: Date;
    /** Record title/name */
    title?: string;
    /** Record description */
    description?: string;
    /** Record location/address */
    address?: string;
    /** Whether the record is active */
    isActive?: boolean;
    /** Company identifier */
    companyId?: number;
    /** Primary contact email */
    primaryEmail?: string;
    /** Primary contact phone */
    primaryPhone?: string;
    /** Record number (e.g., */
    number?: number;
    /** Custom fields */
    custom?: Record<string, unknown>;
}
