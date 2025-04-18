/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CoperniqApi from "../../../../api/index";
import * as core from "../../../../core";

export const GetProjectsRequestOrderBy: core.serialization.Schema<
    serializers.GetProjectsRequestOrderBy.Raw,
    CoperniqApi.GetProjectsRequestOrderBy
> = core.serialization.enum_(["asc", "desc"]);

export declare namespace GetProjectsRequestOrderBy {
    export type Raw = "asc" | "desc";
}
