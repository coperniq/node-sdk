/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as CoperniqApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { ProjectStatus } from "../../../../types/ProjectStatus";

export const ProjectUpdate: core.serialization.Schema<
    serializers.ProjectUpdate.Raw,
    Omit<CoperniqApi.ProjectUpdate, "allowNewOptions">
> = core.serialization.object({
    title: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
    address: core.serialization.string().optional(),
    trades: core.serialization.list(core.serialization.string()).optional(),
    clientId: core.serialization.string().optional(),
    workflowId: core.serialization.string().optional(),
    value: core.serialization.number().optional(),
    size: core.serialization.number().optional(),
    status: ProjectStatus.optional(),
    primaryEmail: core.serialization.string().optional(),
    primaryPhone: core.serialization.string().optional(),
    custom: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
});

export declare namespace ProjectUpdate {
    export interface Raw {
        title?: string | null;
        description?: string | null;
        address?: string | null;
        trades?: string[] | null;
        clientId?: string | null;
        workflowId?: string | null;
        value?: number | null;
        size?: number | null;
        status?: ProjectStatus.Raw | null;
        primaryEmail?: string | null;
        primaryPhone?: string | null;
        custom?: Record<string, unknown> | null;
    }
}
