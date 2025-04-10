/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CoperniqApi from "../../../../api/index";
import * as core from "../../../../core";

export const GetClientsRequestOrderBy: core.serialization.Schema<
    serializers.GetClientsRequestOrderBy.Raw,
    CoperniqApi.GetClientsRequestOrderBy
> = core.serialization.enum_(["asc", "desc"]);

export declare namespace GetClientsRequestOrderBy {
    export type Raw = "asc" | "desc";
}
