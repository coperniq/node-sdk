/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CoperniqApi from "../../../../api/index";
import * as core from "../../../../core";
import { Client } from "../../../types/Client";

export const Response: core.serialization.Schema<serializers.clients.listClients.Response.Raw, CoperniqApi.Client[]> =
    core.serialization.list(Client);

export declare namespace Response {
    export type Raw = Client.Raw[];
}
