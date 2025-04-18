/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as CoperniqApi from "../../api/index";
import * as core from "../../core";

export const ContactCreatedBy: core.serialization.ObjectSchema<
    serializers.ContactCreatedBy.Raw,
    CoperniqApi.ContactCreatedBy
> = core.serialization.object({
    id: core.serialization.number(),
});

export declare namespace ContactCreatedBy {
    export interface Raw {
        id: number;
    }
}
