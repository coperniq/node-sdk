/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as CoperniqApi from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace Projects {
    interface Options {
        environment?: core.Supplier<environments.CoperniqApiEnvironment | string>;
        apiKey: core.Supplier<string>;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}

export class Projects {
    constructor(protected readonly _options: Projects.Options) {}

    /**
     * Retrieve a paginated list of projects.
     *
     * Supports:
     * - Pagination (`page_size`, `page`)
     * - Date filtering (`updated_after`, `updated_before`)
     * - Sorting (`order_by`)
     * - Field search (`title`, `address`, `primaryName`, `primaryPhone`, `primaryEmail`)
     * - Full text search (`q`)
     *
     * @param {CoperniqApi.GetProjectsRequest} request
     * @param {Projects.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link CoperniqApi.UnauthorizedError}
     *
     * @example
     *     await client.projects.listProjects()
     */
    public async listProjects(
        request: CoperniqApi.GetProjectsRequest = {},
        requestOptions?: Projects.RequestOptions
    ): Promise<CoperniqApi.Project[]> {
        const {
            pageSize,
            page,
            updatedAfter,
            updatedBefore,
            orderBy,
            includeVirtualProperties,
            q,
            title,
            address,
            primaryName,
            primaryPhone,
            primaryEmail,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (pageSize != null) {
            _queryParams["page_size"] = pageSize.toString();
        }

        if (page != null) {
            _queryParams["page"] = page.toString();
        }

        if (updatedAfter != null) {
            _queryParams["updated_after"] = updatedAfter.toISOString();
        }

        if (updatedBefore != null) {
            _queryParams["updated_before"] = updatedBefore.toISOString();
        }

        if (orderBy != null) {
            _queryParams["order_by"] = orderBy;
        }

        if (includeVirtualProperties != null) {
            _queryParams["include_virtual_properties"] = includeVirtualProperties.toString();
        }

        if (q != null) {
            _queryParams["q"] = q;
        }

        if (title != null) {
            _queryParams["title"] = title;
        }

        if (address != null) {
            _queryParams["address"] = address;
        }

        if (primaryName != null) {
            _queryParams["primaryName"] = primaryName;
        }

        if (primaryPhone != null) {
            _queryParams["primaryPhone"] = primaryPhone;
        }

        if (primaryEmail != null) {
            _queryParams["primaryEmail"] = primaryEmail;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CoperniqApiEnvironment.Default,
                "projects"
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "node-sdk",
                "X-Fern-SDK-Version": "1.0.2",
                "User-Agent": "node-sdk/1.0.2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.projects.listProjects.Response.parseOrThrow(_response.body, {
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
                throw new errors.CoperniqApiTimeoutError();
            case "unknown":
                throw new errors.CoperniqApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Create a new project with required and optional fields.
     *
     * Required fields:
     * - `title`: Project title/name
     * - `address`: Project location
     * - `trades`: Array of trade types
     *
     * Optional fields:
     * - `clientId`: Link to existing client
     * - `workflowId`: Link to workflow
     * - `primaryEmail`/`primaryPhone`: Contact information
     * - `custom`: Custom fields object
     *
     * Note: If primaryEmail or primaryPhone is provided, a contact will be automatically created or matched.
     *
     * @param {CoperniqApi.PostProjectsRequest} request
     * @param {Projects.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link CoperniqApi.BadRequestError}
     * @throws {@link CoperniqApi.UnauthorizedError}
     *
     * @example
     *     await client.projects.createProject({
     *         body: {
     *             title: "title",
     *             address: "address",
     *             trades: ["trades"]
     *         }
     *     })
     */
    public async createProject(
        request: CoperniqApi.PostProjectsRequest,
        requestOptions?: Projects.RequestOptions
    ): Promise<CoperniqApi.Project> {
        const { allowNewOptions, matchBy, matchFoundStrategy, body: _body } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (allowNewOptions != null) {
            _queryParams["allow_new_options"] = allowNewOptions.toString();
        }

        if (matchBy != null) {
            _queryParams["match_by"] = matchBy;
        }

        if (matchFoundStrategy != null) {
            _queryParams["match_found_strategy"] = matchFoundStrategy;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CoperniqApiEnvironment.Default,
                "projects"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "node-sdk",
                "X-Fern-SDK-Version": "1.0.2",
                "User-Agent": "node-sdk/1.0.2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            body: serializers.ProjectCreate.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.Project.parseOrThrow(_response.body, {
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
                throw new errors.CoperniqApiTimeoutError();
            case "unknown":
                throw new errors.CoperniqApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Retrieve a specific project by ID
     *
     * @param {string} projectId - Project identifier
     * @param {CoperniqApi.GetProjectsProjectIdRequest} request
     * @param {Projects.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link CoperniqApi.UnauthorizedError}
     * @throws {@link CoperniqApi.NotFoundError}
     *
     * @example
     *     await client.projects.getProject("projectId")
     */
    public async getProject(
        projectId: string,
        request: CoperniqApi.GetProjectsProjectIdRequest = {},
        requestOptions?: Projects.RequestOptions
    ): Promise<CoperniqApi.Project> {
        const { includeVirtualProperties } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (includeVirtualProperties != null) {
            _queryParams["include_virtual_properties"] = includeVirtualProperties.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CoperniqApiEnvironment.Default,
                `projects/${encodeURIComponent(projectId)}`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "node-sdk",
                "X-Fern-SDK-Version": "1.0.2",
                "User-Agent": "node-sdk/1.0.2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.Project.parseOrThrow(_response.body, {
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
                throw new errors.CoperniqApiTimeoutError();
            case "unknown":
                throw new errors.CoperniqApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Delete a specific project by ID
     *
     * @param {string} projectId - Project identifier
     * @param {Projects.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link CoperniqApi.UnauthorizedError}
     * @throws {@link CoperniqApi.NotFoundError}
     *
     * @example
     *     await client.projects.deleteProject("projectId")
     */
    public async deleteProject(projectId: string, requestOptions?: Projects.RequestOptions): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CoperniqApiEnvironment.Default,
                `projects/${encodeURIComponent(projectId)}`
            ),
            method: "DELETE",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "node-sdk",
                "X-Fern-SDK-Version": "1.0.2",
                "User-Agent": "node-sdk/1.0.2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
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
                throw new errors.CoperniqApiTimeoutError();
            case "unknown":
                throw new errors.CoperniqApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Update an existing project. Supports partial updates.
     *
     * Updatable fields:
     * - Standard fields (value, size, status, etc.)
     * - Contact information (primaryEmail, primaryPhone)
     * - Custom fields (through custom object)
     *
     * Note: Updates are atomic - either all fields update or none do.
     *
     * @param {string} projectId - Project identifier
     * @param {CoperniqApi.ProjectUpdate} request
     * @param {Projects.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link CoperniqApi.BadRequestError}
     * @throws {@link CoperniqApi.UnauthorizedError}
     * @throws {@link CoperniqApi.NotFoundError}
     *
     * @example
     *     await client.projects.updateProject("projectId")
     */
    public async updateProject(
        projectId: string,
        request: CoperniqApi.ProjectUpdate = {},
        requestOptions?: Projects.RequestOptions
    ): Promise<CoperniqApi.Project> {
        const { allowNewOptions, ..._body } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (allowNewOptions != null) {
            _queryParams["allow_new_options"] = allowNewOptions.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CoperniqApiEnvironment.Default,
                `projects/${encodeURIComponent(projectId)}`
            ),
            method: "PATCH",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "node-sdk",
                "X-Fern-SDK-Version": "1.0.2",
                "User-Agent": "node-sdk/1.0.2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            body: serializers.ProjectUpdate.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.Project.parseOrThrow(_response.body, {
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
                throw new errors.CoperniqApiTimeoutError();
            case "unknown":
                throw new errors.CoperniqApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Bulk import projects
     *
     * @param {CoperniqApi.ProjectCreate[]} request
     * @param {Projects.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link CoperniqApi.BadRequestError}
     * @throws {@link CoperniqApi.UnauthorizedError}
     *
     * @example
     *     await client.projects.importProjects([{
     *             title: "title",
     *             address: "address",
     *             trades: ["trades"]
     *         }])
     */
    public async importProjects(
        request: CoperniqApi.ProjectCreate[],
        requestOptions?: Projects.RequestOptions
    ): Promise<CoperniqApi.Project[]> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CoperniqApiEnvironment.Default,
                "projects/import"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "node-sdk",
                "X-Fern-SDK-Version": "1.0.2",
                "User-Agent": "node-sdk/1.0.2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.projects.importProjects.Request.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.projects.importProjects.Response.parseOrThrow(_response.body, {
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
                throw new errors.CoperniqApiTimeoutError();
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
