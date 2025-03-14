/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as CoperniqApi from "../../api/index";
import * as core from "../../core";

export const WorkOrder: core.serialization.ObjectSchema<serializers.WorkOrder.Raw, CoperniqApi.WorkOrder> =
    core.serialization.object({
        id: core.serialization.number().optional(),
        title: core.serialization.string().optional(),
        description: core.serialization.string().optional(),
        priority: core.serialization.number().optional(),
        startDate: core.serialization.date().optional(),
        endDate: core.serialization.date().optional(),
        templateId: core.serialization.number().optional(),
        status: core.serialization.string().optional(),
        projectId: core.serialization.number().optional(),
    });

export declare namespace WorkOrder {
    interface Raw {
        id?: number | null;
        title?: string | null;
        description?: string | null;
        priority?: number | null;
        startDate?: string | null;
        endDate?: string | null;
        templateId?: number | null;
        status?: string | null;
        projectId?: number | null;
    }
}
