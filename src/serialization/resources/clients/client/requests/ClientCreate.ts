/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as CoperniqApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { ClientCreateType } from "../../types/ClientCreateType";

export const ClientCreate: core.serialization.Schema<
    serializers.ClientCreate.Raw,
    Omit<CoperniqApi.ClientCreate, "allowNewOptions" | "matchBy" | "matchFoundStrategy">
> = core.serialization.object({
    title: core.serialization.string(),
    description: core.serialization.string().optional(),
    address: core.serialization.string(),
    type: ClientCreateType.optional(),
    primaryEmail: core.serialization.string().optional(),
    primaryPhone: core.serialization.string().optional(),
    custom: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
});

export declare namespace ClientCreate {
    interface Raw {
        title: string;
        description?: string | null;
        address: string;
        type?: ClientCreateType.Raw | null;
        primaryEmail?: string | null;
        primaryPhone?: string | null;
        custom?: Record<string, unknown> | null;
    }
}
