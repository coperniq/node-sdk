/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CoperniqApi from "../../../../api/index";
import * as core from "../../../../core";
import { Property } from "../../../types/Property";

export const GetPropertiesResponse: core.serialization.ObjectSchema<
    serializers.GetPropertiesResponse.Raw,
    CoperniqApi.GetPropertiesResponse
> = core.serialization.object({
    projects: core.serialization.list(Property).optional(),
    clients: core.serialization.list(Property).optional(),
    requests: core.serialization.list(Property).optional(),
});

export declare namespace GetPropertiesResponse {
    export interface Raw {
        projects?: Property.Raw[] | null;
        clients?: Property.Raw[] | null;
        requests?: Property.Raw[] | null;
    }
}
