/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as CoperniqApi from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace WorkOrders {
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

export class WorkOrders {
    constructor(protected readonly _options: WorkOrders.Options) {}

    /**
     * Retrieve work orders for a specific project.
     *
     * Supports:
     * - Pagination (`page_size`, `page`)
     * - Date filtering (`updated_after`, `updated_before`)
     * - Sorting (`order_by`)
     *
     * @param {string} projectId - Project identifier
     * @param {CoperniqApi.GetProjectsProjectIdWorkOrdersRequest} request
     * @param {WorkOrders.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link CoperniqApi.UnauthorizedError}
     * @throws {@link CoperniqApi.NotFoundError}
     *
     * @example
     *     await client.workOrders.listProjectWorkOrders("projectId")
     */
    public async listProjectWorkOrders(
        projectId: string,
        request: CoperniqApi.GetProjectsProjectIdWorkOrdersRequest = {},
        requestOptions?: WorkOrders.RequestOptions
    ): Promise<CoperniqApi.WorkOrder[]> {
        const { pageSize, page, updatedAfter, updatedBefore, orderBy } = request;
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

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CoperniqApiEnvironment.Default,
                `projects/${encodeURIComponent(projectId)}/work-orders`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@coperniq/node-sdk",
                "X-Fern-SDK-Version": "1.0.3",
                "User-Agent": "@coperniq/node-sdk/1.0.3",
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
            return serializers.workOrders.listProjectWorkOrders.Response.parseOrThrow(_response.body, {
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
     * Create a new work order in a project.
     *
     * Required fields:
     * - `templateId`: Work order template to use
     * - `title`: Work order title
     *
     * @param {string} projectId - Project identifier
     * @param {CoperniqApi.PostProjectsProjectIdWorkOrdersRequest} request
     * @param {WorkOrders.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link CoperniqApi.BadRequestError}
     * @throws {@link CoperniqApi.UnauthorizedError}
     * @throws {@link CoperniqApi.NotFoundError}
     *
     * @example
     *     await client.workOrders.createWorkOrder("projectId", {
     *         templateId: "templateId",
     *         title: "title"
     *     })
     */
    public async createWorkOrder(
        projectId: string,
        request: CoperniqApi.PostProjectsProjectIdWorkOrdersRequest,
        requestOptions?: WorkOrders.RequestOptions
    ): Promise<CoperniqApi.WorkOrder> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CoperniqApiEnvironment.Default,
                `projects/${encodeURIComponent(projectId)}/work-orders`
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@coperniq/node-sdk",
                "X-Fern-SDK-Version": "1.0.3",
                "User-Agent": "@coperniq/node-sdk/1.0.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.PostProjectsProjectIdWorkOrdersRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.WorkOrder.parseOrThrow(_response.body, {
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
     * Retrieve work orders for a specific client
     *
     * @param {number} clientId
     * @param {WorkOrders.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.workOrders.listClientWorkOrders(1)
     */
    public async listClientWorkOrders(
        clientId: number,
        requestOptions?: WorkOrders.RequestOptions
    ): Promise<CoperniqApi.WorkOrder[]> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CoperniqApiEnvironment.Default,
                `clients/${encodeURIComponent(clientId)}/work-orders`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@coperniq/node-sdk",
                "X-Fern-SDK-Version": "1.0.3",
                "User-Agent": "@coperniq/node-sdk/1.0.3",
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
            return serializers.workOrders.listClientWorkOrders.Response.parseOrThrow(_response.body, {
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
                throw new errors.CoperniqApiTimeoutError();
            case "unknown":
                throw new errors.CoperniqApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Retrieve a paginated list of work orders across all projects.
     *
     * Supports:
     * - Pagination (`page_size`, `page`)
     * - Date filtering (`updated_after`, `updated_before`)
     * - Sorting (`order_by`)
     *
     * @param {CoperniqApi.GetWorkOrdersRequest} request
     * @param {WorkOrders.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link CoperniqApi.UnauthorizedError}
     *
     * @example
     *     await client.workOrders.listWorkOrders()
     */
    public async listWorkOrders(
        request: CoperniqApi.GetWorkOrdersRequest = {},
        requestOptions?: WorkOrders.RequestOptions
    ): Promise<CoperniqApi.WorkOrder[]> {
        const { pageSize, page, updatedAfter, updatedBefore, orderBy } = request;
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

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CoperniqApiEnvironment.Default,
                "work-orders"
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@coperniq/node-sdk",
                "X-Fern-SDK-Version": "1.0.3",
                "User-Agent": "@coperniq/node-sdk/1.0.3",
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
            return serializers.workOrders.listWorkOrders.Response.parseOrThrow(_response.body, {
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
     * Retrieve available work order templates
     *
     * @param {WorkOrders.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link CoperniqApi.UnauthorizedError}
     *
     * @example
     *     await client.workOrders.listWorkOrderTemplates()
     */
    public async listWorkOrderTemplates(
        requestOptions?: WorkOrders.RequestOptions
    ): Promise<CoperniqApi.WorkOrderTemplate[]> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CoperniqApiEnvironment.Default,
                "work-orders/templates"
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@coperniq/node-sdk",
                "X-Fern-SDK-Version": "1.0.3",
                "User-Agent": "@coperniq/node-sdk/1.0.3",
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
            return serializers.workOrders.listWorkOrderTemplates.Response.parseOrThrow(_response.body, {
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
     * Retrieve a specific work order by ID
     *
     * @param {string} workOrderId - Work order identifier
     * @param {WorkOrders.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link CoperniqApi.UnauthorizedError}
     * @throws {@link CoperniqApi.NotFoundError}
     *
     * @example
     *     await client.workOrders.getWorkOrder("workOrderId")
     */
    public async getWorkOrder(
        workOrderId: string,
        requestOptions?: WorkOrders.RequestOptions
    ): Promise<CoperniqApi.WorkOrder> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CoperniqApiEnvironment.Default,
                `work-orders/${encodeURIComponent(workOrderId)}`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@coperniq/node-sdk",
                "X-Fern-SDK-Version": "1.0.3",
                "User-Agent": "@coperniq/node-sdk/1.0.3",
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
            return serializers.WorkOrder.parseOrThrow(_response.body, {
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
     * Delete a specific work order from a project
     *
     * @param {number} projectId - ID of the project containing the work order
     * @param {number} workOrderId - ID of the work order to delete
     * @param {WorkOrders.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link CoperniqApi.BadRequestError}
     * @throws {@link CoperniqApi.UnauthorizedError}
     * @throws {@link CoperniqApi.NotFoundError}
     *
     * @example
     *     await client.workOrders.deleteWorkOrder(1, 1)
     */
    public async deleteWorkOrder(
        projectId: number,
        workOrderId: number,
        requestOptions?: WorkOrders.RequestOptions
    ): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CoperniqApiEnvironment.Default,
                `projects/${encodeURIComponent(projectId)}/work-orders/${encodeURIComponent(workOrderId)}`
            ),
            method: "DELETE",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@coperniq/node-sdk",
                "X-Fern-SDK-Version": "1.0.3",
                "User-Agent": "@coperniq/node-sdk/1.0.3",
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

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = await core.Supplier.get(this._options.apiKey);
        return { "x-api-key": apiKeyValue };
    }
}
