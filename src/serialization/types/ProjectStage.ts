/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as CoperniqApi from "../../api/index";
import * as core from "../../core";
import { ProjectStageSlaStatus } from "./ProjectStageSlaStatus";

export const ProjectStage: core.serialization.ObjectSchema<serializers.ProjectStage.Raw, CoperniqApi.ProjectStage> =
    core.serialization.object({
        id: core.serialization.number().optional(),
        name: core.serialization.string().optional(),
        type: core.serialization.string().optional(),
        scope: core.serialization.string().optional(),
        redSla: core.serialization.number().optional(),
        yellowSla: core.serialization.number().optional(),
        timeInStageDays: core.serialization.number().optional(),
        slaStatus: ProjectStageSlaStatus.optional(),
    });

export declare namespace ProjectStage {
    export interface Raw {
        id?: number | null;
        name?: string | null;
        type?: string | null;
        scope?: string | null;
        redSla?: number | null;
        yellowSla?: number | null;
        timeInStageDays?: number | null;
        slaStatus?: ProjectStageSlaStatus.Raw | null;
    }
}
