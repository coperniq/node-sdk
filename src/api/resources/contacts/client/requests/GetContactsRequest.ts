/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CoperniqApi from "../../../../index";

/**
 * @example
 *     {}
 */
export interface GetContactsRequest {
    /**
     * Number of items per page (max 100)
     */
    pageSize?: number;
    /**
     * Page number (1-based)
     */
    page?: number;
    /**
     * Filter items updated after this timestamp (ISO 8601)
     */
    updatedAfter?: Date;
    /**
     * Filter items updated before this timestamp (ISO 8601)
     */
    updatedBefore?: Date;
    /**
     * Sort order for results
     */
    orderBy?: CoperniqApi.GetContactsRequestOrderBy;
}
