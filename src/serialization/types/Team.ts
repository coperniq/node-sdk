/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as CoperniqApi from "../../api/index";
import * as core from "../../core";
import { User } from "./User";

export const Team: core.serialization.ObjectSchema<serializers.Team.Raw, CoperniqApi.Team> = core.serialization.object({
    id: core.serialization.number().optional(),
    name: core.serialization.string().optional(),
    members: core.serialization.list(User).optional(),
});

export declare namespace Team {
    export interface Raw {
        id?: number | null;
        name?: string | null;
        members?: User.Raw[] | null;
    }
}
