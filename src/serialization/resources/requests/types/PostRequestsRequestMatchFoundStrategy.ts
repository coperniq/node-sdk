/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CoperniqApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostRequestsRequestMatchFoundStrategy: core.serialization.Schema<
    serializers.PostRequestsRequestMatchFoundStrategy.Raw,
    CoperniqApi.PostRequestsRequestMatchFoundStrategy
> = core.serialization.enum_(["skip", "replace", "enrich"]);

export declare namespace PostRequestsRequestMatchFoundStrategy {
    export type Raw = "skip" | "replace" | "enrich";
}
