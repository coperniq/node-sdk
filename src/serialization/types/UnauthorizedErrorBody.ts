/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as CoperniqApi from "../../api/index";
import * as core from "../../core";

export const UnauthorizedErrorBody: core.serialization.ObjectSchema<
    serializers.UnauthorizedErrorBody.Raw,
    CoperniqApi.UnauthorizedErrorBody
> = core.serialization.object({
    message: core.serialization.string().optional(),
    code: core.serialization.stringLiteral("UNAUTHORIZED").optional(),
});

export declare namespace UnauthorizedErrorBody {
    export interface Raw {
        message?: string | null;
        code?: "UNAUTHORIZED" | null;
    }
}
