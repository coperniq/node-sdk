/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as CoperniqApi from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace Clients {
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

export class Clients {
    constructor(protected readonly _options: Clients.Options) {}

    /**
     * Retrieve a paginated list of clients.
     *
     * Supports:
     * - Pagination (`page_size`, `page`)
     * - Date filtering (`updated_after`, `updated_before`)
     * - Sorting (`order_by`, default: desc)
     * - Field search (`title`, `address`, `primaryName`, `primaryPhone`, `primaryEmail`)
     * - Full text search (`q`)
     *
     * @param {CoperniqApi.GetClientsRequest} request
     * @param {Clients.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link CoperniqApi.UnauthorizedError}
     *
     * @example
     *     await client.clients.listClients()
     */
    public async listClients(
        request: CoperniqApi.GetClientsRequest = {},
        requestOptions?: Clients.RequestOptions
    ): Promise<CoperniqApi.Client[]> {
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
                "clients"
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "node-sdk",
                "X-Fern-SDK-Version": "1.0.1",
                "User-Agent": "node-sdk/1.0.1",
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
            return serializers.clients.listClients.Response.parseOrThrow(_response.body, {
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
     * Create a new client with required and optional fields.
     *
     * Required fields:
     * - `title`: Client name
     * - `address`: Client location
     *
     * Optional fields:
     * - `type`: Client type (RESIDENTIAL/COMMERCIAL)
     * - `value`: Client value
     * - `size`: Client size
     * - `primaryEmail`/`primaryPhone`: Contact information
     * - `custom`: Custom fields object
     *
     * Note: If primaryEmail or primaryPhone is provided, a contact will be automatically created or matched.
     *
     * @param {CoperniqApi.ClientCreate} request
     * @param {Clients.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link CoperniqApi.BadRequestError}
     * @throws {@link CoperniqApi.UnauthorizedError}
     *
     * @example
     *     await client.clients.createClient({
     *         title: "title",
     *         address: "address"
     *     })
     */
    public async createClient(
        request: CoperniqApi.ClientCreate,
        requestOptions?: Clients.RequestOptions
    ): Promise<CoperniqApi.Client> {
        const { allowNewOptions, matchBy, matchFoundStrategy, ..._body } = request;
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
                "clients"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "node-sdk",
                "X-Fern-SDK-Version": "1.0.1",
                "User-Agent": "node-sdk/1.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            body: serializers.ClientCreate.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.Client.parseOrThrow(_response.body, {
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
     * Retrieve a specific client by ID
     *
     * @param {string} clientId - Client identifier
     * @param {CoperniqApi.GetClientsClientIdRequest} request
     * @param {Clients.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link CoperniqApi.UnauthorizedError}
     * @throws {@link CoperniqApi.NotFoundError}
     *
     * @example
     *     await client.clients.getClient("clientId")
     */
    public async getClient(
        clientId: string,
        request: CoperniqApi.GetClientsClientIdRequest = {},
        requestOptions?: Clients.RequestOptions
    ): Promise<CoperniqApi.Client> {
        const { includeVirtualProperties } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (includeVirtualProperties != null) {
            _queryParams["include_virtual_properties"] = includeVirtualProperties.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CoperniqApiEnvironment.Default,
                `clients/${encodeURIComponent(clientId)}`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "node-sdk",
                "X-Fern-SDK-Version": "1.0.1",
                "User-Agent": "node-sdk/1.0.1",
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
            return serializers.Client.parseOrThrow(_response.body, {
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
     * Delete a specific client by ID
     *
     * @param {string} clientId - Client identifier
     * @param {Clients.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link CoperniqApi.UnauthorizedError}
     * @throws {@link CoperniqApi.NotFoundError}
     *
     * @example
     *     await client.clients.deleteClient("clientId")
     */
    public async deleteClient(clientId: string, requestOptions?: Clients.RequestOptions): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CoperniqApiEnvironment.Default,
                `clients/${encodeURIComponent(clientId)}`
            ),
            method: "DELETE",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "node-sdk",
                "X-Fern-SDK-Version": "1.0.1",
                "User-Agent": "node-sdk/1.0.1",
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
     * Update an existing client. Supports partial updates.
     *
     * Updatable fields:
     * - Standard fields (value, size, type, etc.)
     * - Contact information (primaryEmail, primaryPhone)
     * - Custom fields (through custom object)
     *
     * Note: Updates are atomic - either all fields update or none do.
     *
     * @param {string} clientId - Client identifier
     * @param {CoperniqApi.PatchClientsClientIdRequest} request
     * @param {Clients.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link CoperniqApi.BadRequestError}
     * @throws {@link CoperniqApi.UnauthorizedError}
     * @throws {@link CoperniqApi.NotFoundError}
     *
     * @example
     *     await client.clients.updateClient("clientId", {
     *         body: {
     *             "key": "value"
     *         }
     *     })
     */
    public async updateClient(
        clientId: string,
        request: CoperniqApi.PatchClientsClientIdRequest,
        requestOptions?: Clients.RequestOptions
    ): Promise<CoperniqApi.Client> {
        const { allowNewOptions, body: _body } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (allowNewOptions != null) {
            _queryParams["allow_new_options"] = allowNewOptions.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CoperniqApiEnvironment.Default,
                `clients/${encodeURIComponent(clientId)}`
            ),
            method: "PATCH",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "node-sdk",
                "X-Fern-SDK-Version": "1.0.1",
                "User-Agent": "node-sdk/1.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            body: _body,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.Client.parseOrThrow(_response.body, {
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

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = await core.Supplier.get(this._options.apiKey);
        return { "x-api-key": apiKeyValue };
    }
}
