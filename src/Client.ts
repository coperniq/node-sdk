/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Projects } from "./api/resources/projects/client/Client";
import { Clients } from "./api/resources/clients/client/Client";
import { Comments } from "./api/resources/comments/client/Client";
import { WorkOrders } from "./api/resources/workOrders/client/Client";
import { Requests } from "./api/resources/requests/client/Client";
import { Contacts } from "./api/resources/contacts/client/Client";
import { Users } from "./api/resources/users/client/Client";
import { Properties } from "./api/resources/properties/client/Client";
import { Workflows } from "./api/resources/workflows/client/Client";
import { Companies } from "./api/resources/companies/client/Client";
import { Import2 } from "./api/resources/import2/client/Client";
import { Files } from "./api/resources/files/client/Client";

export declare namespace CoperniqApiClient {
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

export class CoperniqApiClient {
    protected _projects: Projects | undefined;
    protected _clients: Clients | undefined;
    protected _comments: Comments | undefined;
    protected _workOrders: WorkOrders | undefined;
    protected _requests: Requests | undefined;
    protected _contacts: Contacts | undefined;
    protected _users: Users | undefined;
    protected _properties: Properties | undefined;
    protected _workflows: Workflows | undefined;
    protected _companies: Companies | undefined;
    protected _import2: Import2 | undefined;
    protected _files: Files | undefined;

    constructor(protected readonly _options: CoperniqApiClient.Options) {}

    public get projects(): Projects {
        return (this._projects ??= new Projects(this._options));
    }

    public get clients(): Clients {
        return (this._clients ??= new Clients(this._options));
    }

    public get comments(): Comments {
        return (this._comments ??= new Comments(this._options));
    }

    public get workOrders(): WorkOrders {
        return (this._workOrders ??= new WorkOrders(this._options));
    }

    public get requests(): Requests {
        return (this._requests ??= new Requests(this._options));
    }

    public get contacts(): Contacts {
        return (this._contacts ??= new Contacts(this._options));
    }

    public get users(): Users {
        return (this._users ??= new Users(this._options));
    }

    public get properties(): Properties {
        return (this._properties ??= new Properties(this._options));
    }

    public get workflows(): Workflows {
        return (this._workflows ??= new Workflows(this._options));
    }

    public get companies(): Companies {
        return (this._companies ??= new Companies(this._options));
    }

    public get import2(): Import2 {
        return (this._import2 ??= new Import2(this._options));
    }

    public get files(): Files {
        return (this._files ??= new Files(this._options));
    }
}
