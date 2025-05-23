/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as CoperniqApi from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace Comments {
    export interface Options {
        environment?: core.Supplier<environments.CoperniqApiEnvironment | string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        apiKey: core.Supplier<string>;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class Comments {
    constructor(protected readonly _options: Comments.Options) {}

    /**
     * Retrieve comments for a specific project
     *
     * @param {string} projectId - Project identifier
     * @param {Comments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link CoperniqApi.UnauthorizedError}
     * @throws {@link CoperniqApi.NotFoundError}
     *
     * @example
     *     await client.comments.listProjectComments("projectId")
     */
    public async listProjectComments(
        projectId: string,
        requestOptions?: Comments.RequestOptions,
    ): Promise<CoperniqApi.Comment[]> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.CoperniqApiEnvironment.Default,
                `projects/${encodeURIComponent(projectId)}/comments`,
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@coperniq/node-sdk",
                "X-Fern-SDK-Version": "0.0.40",
                "User-Agent": "@coperniq/node-sdk/0.0.40",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.comments.listProjectComments.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new CoperniqApi.UnauthorizedError(_response.error.body);
                case 404:
                    throw new CoperniqApi.NotFoundError(_response.error.body);
                default:
                    throw new errors.CoperniqApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CoperniqApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CoperniqApiTimeoutError(
                    "Timeout exceeded when calling GET /projects/{projectId}/comments.",
                );
            case "unknown":
                throw new errors.CoperniqApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Add a new comment to a project
     *
     * @param {string} projectId - Project identifier
     * @param {CoperniqApi.CommentCreate} request
     * @param {Comments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link CoperniqApi.BadRequestError}
     * @throws {@link CoperniqApi.UnauthorizedError}
     * @throws {@link CoperniqApi.NotFoundError}
     *
     * @example
     *     await client.comments.addProjectComment("projectId", {
     *         body: "body"
     *     })
     */
    public async addProjectComment(
        projectId: string,
        request: CoperniqApi.CommentCreate,
        requestOptions?: Comments.RequestOptions,
    ): Promise<CoperniqApi.Comment> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.CoperniqApiEnvironment.Default,
                `projects/${encodeURIComponent(projectId)}/comments`,
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@coperniq/node-sdk",
                "X-Fern-SDK-Version": "0.0.40",
                "User-Agent": "@coperniq/node-sdk/0.0.40",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.CommentCreate.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.Comment.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new CoperniqApi.BadRequestError(_response.error.body);
                case 401:
                    throw new CoperniqApi.UnauthorizedError(_response.error.body);
                case 404:
                    throw new CoperniqApi.NotFoundError(_response.error.body);
                default:
                    throw new errors.CoperniqApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CoperniqApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CoperniqApiTimeoutError(
                    "Timeout exceeded when calling POST /projects/{projectId}/comments.",
                );
            case "unknown":
                throw new errors.CoperniqApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Retrieve comments for a specific client
     *
     * @param {number} clientId
     * @param {Comments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.comments.listClientComments(1)
     */
    public async listClientComments(
        clientId: number,
        requestOptions?: Comments.RequestOptions,
    ): Promise<CoperniqApi.Comment[]> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.CoperniqApiEnvironment.Default,
                `clients/${encodeURIComponent(clientId)}/comments`,
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@coperniq/node-sdk",
                "X-Fern-SDK-Version": "0.0.40",
                "User-Agent": "@coperniq/node-sdk/0.0.40",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.comments.listClientComments.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CoperniqApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CoperniqApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CoperniqApiTimeoutError(
                    "Timeout exceeded when calling GET /clients/{clientId}/comments.",
                );
            case "unknown":
                throw new errors.CoperniqApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Add a new comment to a client
     *
     * @param {number} clientId
     * @param {CoperniqApi.CommentCreate} request
     * @param {Comments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.comments.addClientComment(1, {
     *         body: "body"
     *     })
     */
    public async addClientComment(
        clientId: number,
        request: CoperniqApi.CommentCreate,
        requestOptions?: Comments.RequestOptions,
    ): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.CoperniqApiEnvironment.Default,
                `clients/${encodeURIComponent(clientId)}/comments`,
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@coperniq/node-sdk",
                "X-Fern-SDK-Version": "0.0.40",
                "User-Agent": "@coperniq/node-sdk/0.0.40",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.CommentCreate.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CoperniqApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CoperniqApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CoperniqApiTimeoutError(
                    "Timeout exceeded when calling POST /clients/{clientId}/comments.",
                );
            case "unknown":
                throw new errors.CoperniqApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Update an existing client comment
     *
     * @param {number} clientId
     * @param {CoperniqApi.CommentUpdate} request
     * @param {Comments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.comments.updateClientComment(1, {
     *         body: "body"
     *     })
     */
    public async updateClientComment(
        clientId: number,
        request: CoperniqApi.CommentUpdate,
        requestOptions?: Comments.RequestOptions,
    ): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.CoperniqApiEnvironment.Default,
                `clients/${encodeURIComponent(clientId)}/comments`,
            ),
            method: "PATCH",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@coperniq/node-sdk",
                "X-Fern-SDK-Version": "0.0.40",
                "User-Agent": "@coperniq/node-sdk/0.0.40",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.CommentUpdate.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CoperniqApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CoperniqApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CoperniqApiTimeoutError(
                    "Timeout exceeded when calling PATCH /clients/{clientId}/comments.",
                );
            case "unknown":
                throw new errors.CoperniqApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Retrieve a specific comment by ID
     *
     * @param {string} commentId - Comment identifier
     * @param {Comments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link CoperniqApi.UnauthorizedError}
     * @throws {@link CoperniqApi.NotFoundError}
     *
     * @example
     *     await client.comments.getComment("commentId")
     */
    public async getComment(commentId: string, requestOptions?: Comments.RequestOptions): Promise<CoperniqApi.Comment> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.CoperniqApiEnvironment.Default,
                `comments/${encodeURIComponent(commentId)}`,
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@coperniq/node-sdk",
                "X-Fern-SDK-Version": "0.0.40",
                "User-Agent": "@coperniq/node-sdk/0.0.40",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.Comment.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new CoperniqApi.UnauthorizedError(_response.error.body);
                case 404:
                    throw new CoperniqApi.NotFoundError(_response.error.body);
                default:
                    throw new errors.CoperniqApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CoperniqApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CoperniqApiTimeoutError("Timeout exceeded when calling GET /comments/{commentId}.");
            case "unknown":
                throw new errors.CoperniqApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Update an existing comment
     *
     * @param {string} commentId - Comment identifier
     * @param {CoperniqApi.CommentUpdate} request
     * @param {Comments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link CoperniqApi.BadRequestError}
     * @throws {@link CoperniqApi.UnauthorizedError}
     * @throws {@link CoperniqApi.NotFoundError}
     *
     * @example
     *     await client.comments.updateComment("commentId", {
     *         body: "body"
     *     })
     */
    public async updateComment(
        commentId: string,
        request: CoperniqApi.CommentUpdate,
        requestOptions?: Comments.RequestOptions,
    ): Promise<CoperniqApi.Comment> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.CoperniqApiEnvironment.Default,
                `comments/${encodeURIComponent(commentId)}`,
            ),
            method: "PATCH",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@coperniq/node-sdk",
                "X-Fern-SDK-Version": "0.0.40",
                "User-Agent": "@coperniq/node-sdk/0.0.40",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.CommentUpdate.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.Comment.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new CoperniqApi.BadRequestError(_response.error.body);
                case 401:
                    throw new CoperniqApi.UnauthorizedError(_response.error.body);
                case 404:
                    throw new CoperniqApi.NotFoundError(_response.error.body);
                default:
                    throw new errors.CoperniqApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CoperniqApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CoperniqApiTimeoutError("Timeout exceeded when calling PATCH /comments/{commentId}.");
            case "unknown":
                throw new errors.CoperniqApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = await core.Supplier.get(this._options.apiKey);
        return { "x-api-key": apiKeyValue };
    }
}
