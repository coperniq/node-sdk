# Reference

## Authentication

<details><summary><code>client.authentication.<a href="/src/api/resources/authentication/client/Client.ts">getApiKey</a>() -> CoperniqApi.ApiKeyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Obtain an API key using Basic Authentication. This key will be used for all other API requests.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.authentication.getApiKey();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Authentication.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Projects

<details><summary><code>client.projects.<a href="/src/api/resources/projects/client/Client.ts">listProjects</a>({ ...params }) -> CoperniqApi.Project[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a paginated list of projects.

Supports:

-   Pagination (`page_size`, `page`)
-   Date filtering (`updated_after`, `updated_before`)
-   Sorting (`order_by`)
-   Field search (`title`, `address`, `primaryName`, `primaryPhone`, `primaryEmail`)
-   Full text search (`q`)
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.projects.listProjects();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CoperniqApi.GetProjectsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Projects.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.projects.<a href="/src/api/resources/projects/client/Client.ts">createProject</a>({ ...params }) -> CoperniqApi.Project</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new project with required and optional fields.

Required fields:

-   `title`: Project title/name
-   `address`: Project location
-   `trades`: Array of trade types

Optional fields:

-   `clientId`: Link to existing client
-   `workflowId`: Link to workflow
-   `primaryEmail`/`primaryPhone`: Contact information
-   `custom`: Custom fields object

Note: If primaryEmail or primaryPhone is provided, a contact will be automatically created or matched.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.projects.createProject({
    body: {
        title: "title",
        address: "address",
        trades: ["trades"],
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CoperniqApi.PostProjectsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Projects.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.projects.<a href="/src/api/resources/projects/client/Client.ts">getProject</a>(projectId, { ...params }) -> CoperniqApi.Project</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a specific project by ID

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.projects.getProject("projectId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**projectId:** `string` — Project identifier

</dd>
</dl>

<dl>
<dd>

**request:** `CoperniqApi.GetProjectsProjectIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Projects.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.projects.<a href="/src/api/resources/projects/client/Client.ts">deleteProject</a>(projectId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a specific project by ID

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.projects.deleteProject("projectId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**projectId:** `string` — Project identifier

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Projects.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.projects.<a href="/src/api/resources/projects/client/Client.ts">updateProject</a>(projectId, { ...params }) -> CoperniqApi.Project</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an existing project. Supports partial updates.

Updatable fields:

-   Standard fields (value, size, status, etc.)
-   Contact information (primaryEmail, primaryPhone)
-   Custom fields (through custom object)

Note: Updates are atomic - either all fields update or none do.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.projects.updateProject("projectId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**projectId:** `string` — Project identifier

</dd>
</dl>

<dl>
<dd>

**request:** `CoperniqApi.ProjectUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Projects.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.projects.<a href="/src/api/resources/projects/client/Client.ts">importProjects</a>({ ...params }) -> CoperniqApi.Project[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Bulk import projects

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.projects.importProjects([
    {
        title: "title",
        address: "address",
        trades: ["trades"],
    },
]);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CoperniqApi.ProjectCreate[]`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Projects.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Clients

<details><summary><code>client.clients.<a href="/src/api/resources/clients/client/Client.ts">listClients</a>({ ...params }) -> CoperniqApi.Client[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a paginated list of clients.

Supports:

-   Pagination (`page_size`, `page`)
-   Date filtering (`updated_after`, `updated_before`)
-   Sorting (`order_by`, default: desc)
-   Field search (`title`, `address`, `primaryName`, `primaryPhone`, `primaryEmail`)
-   Full text search (`q`)
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.clients.listClients();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CoperniqApi.GetClientsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Clients.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.clients.<a href="/src/api/resources/clients/client/Client.ts">createClient</a>({ ...params }) -> CoperniqApi.Client</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new client with required and optional fields.

Required fields:

-   `title`: Client name
-   `address`: Client location

Optional fields:

-   `type`: Client type (RESIDENTIAL/COMMERCIAL)
-   `value`: Client value
-   `size`: Client size
-   `primaryEmail`/`primaryPhone`: Contact information
-   `custom`: Custom fields object

Note: If primaryEmail or primaryPhone is provided, a contact will be automatically created or matched.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.clients.createClient({
    title: "title",
    address: "address",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CoperniqApi.ClientCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Clients.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.clients.<a href="/src/api/resources/clients/client/Client.ts">getClient</a>(clientId, { ...params }) -> CoperniqApi.Client</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a specific client by ID

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.clients.getClient("clientId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**clientId:** `string` — Client identifier

</dd>
</dl>

<dl>
<dd>

**request:** `CoperniqApi.GetClientsClientIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Clients.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.clients.<a href="/src/api/resources/clients/client/Client.ts">deleteClient</a>(clientId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a specific client by ID

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.clients.deleteClient("clientId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**clientId:** `string` — Client identifier

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Clients.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.clients.<a href="/src/api/resources/clients/client/Client.ts">updateClient</a>(clientId, { ...params }) -> CoperniqApi.Client</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an existing client. Supports partial updates.

Updatable fields:

-   Standard fields (value, size, type, etc.)
-   Contact information (primaryEmail, primaryPhone)
-   Custom fields (through custom object)

Note: Updates are atomic - either all fields update or none do.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.clients.updateClient("clientId", {
    body: {
        key: "value",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**clientId:** `string` — Client identifier

</dd>
</dl>

<dl>
<dd>

**request:** `CoperniqApi.PatchClientsClientIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Clients.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Comments

<details><summary><code>client.comments.<a href="/src/api/resources/comments/client/Client.ts">listProjectComments</a>(projectId) -> CoperniqApi.Comment[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve comments for a specific project

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.comments.listProjectComments("projectId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**projectId:** `string` — Project identifier

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Comments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.comments.<a href="/src/api/resources/comments/client/Client.ts">addProjectComment</a>(projectId, { ...params }) -> CoperniqApi.Comment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add a new comment to a project

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.comments.addProjectComment("projectId", {
    body: "body",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**projectId:** `string` — Project identifier

</dd>
</dl>

<dl>
<dd>

**request:** `CoperniqApi.CommentCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Comments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.comments.<a href="/src/api/resources/comments/client/Client.ts">listClientComments</a>(clientId) -> CoperniqApi.Comment[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve comments for a specific client

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.comments.listClientComments(1);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**clientId:** `number`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Comments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.comments.<a href="/src/api/resources/comments/client/Client.ts">addClientComment</a>(clientId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add a new comment to a client

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.comments.addClientComment(1, {
    body: "body",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**clientId:** `number`

</dd>
</dl>

<dl>
<dd>

**request:** `CoperniqApi.CommentCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Comments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.comments.<a href="/src/api/resources/comments/client/Client.ts">updateClientComment</a>(clientId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an existing client comment

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.comments.updateClientComment(1, {
    body: "body",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**clientId:** `number`

</dd>
</dl>

<dl>
<dd>

**request:** `CoperniqApi.CommentUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Comments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.comments.<a href="/src/api/resources/comments/client/Client.ts">getComment</a>(commentId) -> CoperniqApi.Comment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a specific comment by ID

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.comments.getComment("commentId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**commentId:** `string` — Comment identifier

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Comments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.comments.<a href="/src/api/resources/comments/client/Client.ts">updateComment</a>(commentId, { ...params }) -> CoperniqApi.Comment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an existing comment

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.comments.updateComment("commentId", {
    body: "body",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**commentId:** `string` — Comment identifier

</dd>
</dl>

<dl>
<dd>

**request:** `CoperniqApi.CommentUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Comments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## WorkOrders

<details><summary><code>client.workOrders.<a href="/src/api/resources/workOrders/client/Client.ts">listProjectWorkOrders</a>(projectId, { ...params }) -> CoperniqApi.WorkOrder[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve work orders for a specific project.

Supports:

-   Pagination (`page_size`, `page`)
-   Date filtering (`updated_after`, `updated_before`)
-   Sorting (`order_by`)
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workOrders.listProjectWorkOrders("projectId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**projectId:** `string` — Project identifier

</dd>
</dl>

<dl>
<dd>

**request:** `CoperniqApi.GetProjectsProjectIdWorkOrdersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WorkOrders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.workOrders.<a href="/src/api/resources/workOrders/client/Client.ts">createWorkOrder</a>(projectId, { ...params }) -> CoperniqApi.WorkOrder</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new work order in a project.

Required fields:

-   `templateId`: Work order template to use
-   `title`: Work order title
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workOrders.createWorkOrder("projectId", {
    templateId: "templateId",
    title: "title",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**projectId:** `string` — Project identifier

</dd>
</dl>

<dl>
<dd>

**request:** `CoperniqApi.PostProjectsProjectIdWorkOrdersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WorkOrders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.workOrders.<a href="/src/api/resources/workOrders/client/Client.ts">listClientWorkOrders</a>(clientId) -> CoperniqApi.WorkOrder[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve work orders for a specific client

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workOrders.listClientWorkOrders(1);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**clientId:** `number`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WorkOrders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.workOrders.<a href="/src/api/resources/workOrders/client/Client.ts">listWorkOrders</a>({ ...params }) -> CoperniqApi.WorkOrder[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a paginated list of work orders across all projects.

Supports:

-   Pagination (`page_size`, `page`)
-   Date filtering (`updated_after`, `updated_before`)
-   Sorting (`order_by`)
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workOrders.listWorkOrders();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CoperniqApi.GetWorkOrdersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WorkOrders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.workOrders.<a href="/src/api/resources/workOrders/client/Client.ts">listWorkOrderTemplates</a>() -> CoperniqApi.WorkOrderTemplate[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve available work order templates

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workOrders.listWorkOrderTemplates();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `WorkOrders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.workOrders.<a href="/src/api/resources/workOrders/client/Client.ts">getWorkOrder</a>(workOrderId) -> CoperniqApi.WorkOrder</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a specific work order by ID

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workOrders.getWorkOrder("workOrderId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**workOrderId:** `string` — Work order identifier

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WorkOrders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.workOrders.<a href="/src/api/resources/workOrders/client/Client.ts">deleteWorkOrder</a>(projectId, workOrderId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a specific work order from a project

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workOrders.deleteWorkOrder(1, 1);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**projectId:** `number` — ID of the project containing the work order

</dd>
</dl>

<dl>
<dd>

**workOrderId:** `number` — ID of the work order to delete

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WorkOrders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Requests

<details><summary><code>client.requests.<a href="/src/api/resources/requests/client/Client.ts">listRequests</a>({ ...params }) -> CoperniqApi.Request[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a paginated list of requests.

Supports:

-   Pagination (`page_size`, `page`)
-   Date filtering (`updated_after`, `updated_before`)
-   Sorting (`order_by`, default: desc)
-   Field search (`title`, `address`, `primaryName`, `primaryPhone`, `primaryEmail`)
-   Full text search (`q`)
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.requests.listRequests();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CoperniqApi.GetRequestsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Requests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.requests.<a href="/src/api/resources/requests/client/Client.ts">createRequest</a>({ ...params }) -> CoperniqApi.Request</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new request with required and optional fields.

Required fields:

-   `title`: Request title/name
-   `address`: Request location
-   `trades`: Array of trade types

Optional fields:

-   `clientId`: Link to existing client
-   `workflowId`: Link to workflow
-   `value`: Request value
-   `size`: Request size
-   `confidence`: Confidence score (0-100)
-   `primaryEmail`/`primaryPhone`: Contact information
-   `custom`: Custom fields object

Note: If primaryEmail or primaryPhone is provided, a contact will be automatically created or matched.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.requests.createRequest({
    body: {
        key: "value",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CoperniqApi.PostRequestsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Requests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.requests.<a href="/src/api/resources/requests/client/Client.ts">getRequest</a>(requestId, { ...params }) -> CoperniqApi.Request</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a specific request by ID

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.requests.getRequest("requestId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestId:** `string` — Request identifier

</dd>
</dl>

<dl>
<dd>

**request:** `CoperniqApi.GetRequestsRequestIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Requests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.requests.<a href="/src/api/resources/requests/client/Client.ts">deleteRequest</a>(requestId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a specific request by ID

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.requests.deleteRequest("requestId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestId:** `string` — Request identifier

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Requests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.requests.<a href="/src/api/resources/requests/client/Client.ts">updateRequest</a>(requestId, { ...params }) -> CoperniqApi.Request</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an existing request. Supports partial updates.

Updatable fields:

-   Standard fields (value, size, status, confidence, etc.)
-   Contact information (primaryEmail, primaryPhone)
-   Custom fields (through custom object)

Note: Updates are atomic - either all fields update or none do.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.requests.updateRequest("requestId", {
    body: {
        key: "value",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestId:** `string` — Request identifier

</dd>
</dl>

<dl>
<dd>

**request:** `CoperniqApi.PatchRequestsRequestIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Requests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Contacts

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">listContacts</a>({ ...params }) -> CoperniqApi.Contact[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a paginated list of contacts.

Supports:

-   Pagination (`page_size`, `page`)
-   Date filtering (`updated_after`, `updated_before`)
-   Sorting (`order_by`)
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contacts.listContacts();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CoperniqApi.GetContactsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Contacts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">createContact</a>({ ...params }) -> CoperniqApi.Contact</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new contact.

Required fields:

-   `firstName`: Contact's first name
-   `lastName`: Contact's last name

Optional fields:

-   `email`: Contact's email address
-   `phone`: Contact's phone number
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contacts.createContact({
    firstName: "firstName",
    lastName: "lastName",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CoperniqApi.ContactCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Contacts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">getContact</a>(contactId) -> CoperniqApi.Contact</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a specific contact by ID

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contacts.getContact("contactId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**contactId:** `string` — Contact identifier

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Contacts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">deleteContact</a>(contactId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a specific contact by ID

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contacts.deleteContact("contactId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**contactId:** `string` — Contact identifier

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Contacts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">updateContact</a>(contactId, { ...params }) -> CoperniqApi.Contact</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an existing contact. Supports partial updates.

Updatable fields:

-   `firstName`: Contact's first name
-   `lastName`: Contact's last name
-   `email`: Contact's email address
-   `phone`: Contact's phone number
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contacts.updateContact("contactId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**contactId:** `string` — Contact identifier

</dd>
</dl>

<dl>
<dd>

**request:** `CoperniqApi.ContactUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Contacts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Users

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">getCurrentUser</a>() -> CoperniqApi.User</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve details of the current authenticated user

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.getCurrentUser();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">inviteUser</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Invite a new user to the organization

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.inviteUser({
    email: "email",
    roleId: "roleId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CoperniqApi.UserInvite`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">listRoles</a>() -> CoperniqApi.Role[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve available user roles

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.listRoles();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">listTeams</a>() -> CoperniqApi.Team[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve available teams

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.listTeams();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
