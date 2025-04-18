/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as CoperniqApi from "../../api/index";
import * as core from "../../core";

export const CommentCreate: core.serialization.ObjectSchema<serializers.CommentCreate.Raw, CoperniqApi.CommentCreate> =
    core.serialization.object({
        body: core.serialization.string(),
    });

export declare namespace CommentCreate {
    export interface Raw {
        body: string;
    }
}
