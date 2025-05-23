/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * - skip: Return existing record without changes
 * - replace: Replace existing record with new data
 * - enrich: Update only empty fields in existing record
 */
export type PostRequestsRequestMatchFoundStrategy = "skip" | "replace" | "enrich";
export const PostRequestsRequestMatchFoundStrategy = {
    Skip: "skip",
    Replace: "replace",
    Enrich: "enrich",
} as const;
