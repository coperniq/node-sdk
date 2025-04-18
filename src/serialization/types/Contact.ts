/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as CoperniqApi from "../../api/index";
import * as core from "../../core";
import { ContactCreatedBy } from "./ContactCreatedBy";

export const Contact: core.serialization.ObjectSchema<serializers.Contact.Raw, CoperniqApi.Contact> =
    core.serialization.object({
        id: core.serialization.number(),
        companyId: core.serialization.number().optional(),
        name: core.serialization.string().optional(),
        emails: core.serialization.list(core.serialization.string()).optional(),
        phones: core.serialization.list(core.serialization.string()).optional(),
        createdBy: ContactCreatedBy.optional(),
        createdAt: core.serialization.date(),
        updatedAt: core.serialization.date(),
    });

export declare namespace Contact {
    export interface Raw {
        id: number;
        companyId?: number | null;
        name?: string | null;
        emails?: string[] | null;
        phones?: string[] | null;
        createdBy?: ContactCreatedBy.Raw | null;
        createdAt: string;
        updatedAt: string;
    }
}
