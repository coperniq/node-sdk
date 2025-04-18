/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as CoperniqApi from "../../api/index";
import * as core from "../../core";

export const ErrorCode: core.serialization.Schema<serializers.ErrorCode.Raw, CoperniqApi.ErrorCode> =
    core.serialization.enum_(["VALIDATION_ERROR", "NOT_FOUND", "UNAUTHORIZED", "BAD_REQUEST"]);

export declare namespace ErrorCode {
    export type Raw = "VALIDATION_ERROR" | "NOT_FOUND" | "UNAUTHORIZED" | "BAD_REQUEST";
}
