/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as CoperniqApi from "../../api/index";
import * as core from "../../core";

export const BadRequestErrorBodyCode: core.serialization.Schema<
    serializers.BadRequestErrorBodyCode.Raw,
    CoperniqApi.BadRequestErrorBodyCode
> = core.serialization.enum_(["VALIDATION_ERROR", "INVALID_JSON", "PREPROCESSING_ERROR"]);

export declare namespace BadRequestErrorBodyCode {
    type Raw = "VALIDATION_ERROR" | "INVALID_JSON" | "PREPROCESSING_ERROR";
}
