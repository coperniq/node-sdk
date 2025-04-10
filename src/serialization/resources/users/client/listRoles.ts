/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CoperniqApi from "../../../../api/index";
import * as core from "../../../../core";
import { Role } from "../../../types/Role";

export const Response: core.serialization.Schema<serializers.users.listRoles.Response.Raw, CoperniqApi.Role[]> =
    core.serialization.list(Role);

export declare namespace Response {
    export type Raw = Role.Raw[];
}
