/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as CoperniqApi from "../../api/index";
import * as core from "../../core";

export const WorkOrderStatusUpdatedBy: core.serialization.ObjectSchema<
    serializers.WorkOrderStatusUpdatedBy.Raw,
    CoperniqApi.WorkOrderStatusUpdatedBy
> = core.serialization.object({
    id: core.serialization.number(),
    firstName: core.serialization.string(),
    lastName: core.serialization.string(),
});

export declare namespace WorkOrderStatusUpdatedBy {
    export interface Raw {
        id: number;
        firstName: string;
        lastName: string;
    }
}
