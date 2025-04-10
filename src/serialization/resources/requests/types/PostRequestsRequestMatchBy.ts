/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CoperniqApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostRequestsRequestMatchBy: core.serialization.Schema<
    serializers.PostRequestsRequestMatchBy.Raw,
    CoperniqApi.PostRequestsRequestMatchBy
> = core.serialization.enum_(["title", "primaryEmail", "primaryPhone", "address"]);

export declare namespace PostRequestsRequestMatchBy {
    export type Raw = "title" | "primaryEmail" | "primaryPhone" | "address";
}
