/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CoperniqApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostProjectsRequestMatchFoundStrategy: core.serialization.Schema<
    serializers.PostProjectsRequestMatchFoundStrategy.Raw,
    CoperniqApi.PostProjectsRequestMatchFoundStrategy
> = core.serialization.enum_(["skip", "replace", "enrich"]);

export declare namespace PostProjectsRequestMatchFoundStrategy {
    type Raw = "skip" | "replace" | "enrich";
}
