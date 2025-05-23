/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as CoperniqApi from "../../api/index";
import * as core from "../../core";

export const FileMetaData: core.serialization.ObjectSchema<serializers.FileMetaData.Raw, CoperniqApi.FileMetaData> =
    core.serialization.object({
        acl: core.serialization.string(),
        gps: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
        size: core.serialization.number(),
        userId: core.serialization.number(),
        mimeType: core.serialization.string(),
        extention: core.serialization.string(),
        originalName: core.serialization.string(),
        thumbnailUrl: core.serialization.string().optional(),
        generatedName: core.serialization.string(),
        thumbnailName: core.serialization.string().optional(),
        requestFileName: core.serialization.string().optional(),
    });

export declare namespace FileMetaData {
    export interface Raw {
        acl: string;
        gps?: Record<string, unknown> | null;
        size: number;
        userId: number;
        mimeType: string;
        extention: string;
        originalName: string;
        thumbnailUrl?: string | null;
        generatedName: string;
        thumbnailName?: string | null;
        requestFileName?: string | null;
    }
}
