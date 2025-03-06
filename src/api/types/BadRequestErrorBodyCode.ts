/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type BadRequestErrorBodyCode = "VALIDATION_ERROR" | "INVALID_JSON" | "PREPROCESSING_ERROR";

export const BadRequestErrorBodyCode = {
    ValidationError: "VALIDATION_ERROR",
    InvalidJson: "INVALID_JSON",
    PreprocessingError: "PREPROCESSING_ERROR",
} as const;
