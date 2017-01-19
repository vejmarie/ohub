# Projects

<span class="api method post">POST</span> <span class="api label">/v1/projects</span>

Create a project. Once created, a project is own by the user who sent the creation request.

###### body

```json
{
    "identifier": "teleporter",
    "name": "Open Teleporter",
    "description": "A basic teleporter to allow anyone to move all around the world"
}
```

###### Response

```json
{
    "id": "587e2ceeccb8b2921b3c6e2c",
    "identifier": "teleporter",
    "name": "Open Teleporter",
    "owner": "587e2ceeccb8b2921b3c6e2b",
    "description": "A basic teleporter to allow anyone to move all around the world",
    "createdAt": "2017-01-17T14:40:46.792Z",
    "updatedAt": "2017-01-17T14:40:46.792Z",
}
```

###### Parameters

Name           | In    | Type     | Required | Description
---------------|-------|----------|----------|-----------------------------------
`identifier`   | body  | string   | Yes      | Identifier for the project
`name`         | body  | string   | Yes      | Project name
`description`  | body  | string   | No       | Project short description

###### Response codes

Code   | Name             | Description
-------|------------------|---------------------------------------------------
`201`  | `Created`        | Project has been correctly created
`409`  | `Conflict`       | A project already exists with the same identifier
`400`  | `Bad Request`    | Request is either malformed or incomplete

___

<span class="api method get">GET</span> <span class="api label">/v1/projects</span>

Get all projects.

###### Response

```json
[
    {
        "id": "587e2ceeccb8b2921b3c6e2c",
        "identifier": "teleporter",
        "name": "Open Teleporter",
        "description": "A basic teleporter to allow anyone to move all around the world",
        "owner": "587e2ceeccb8b2921b3c6e2b",
        "createdAt": "2017-01-17T14:40:46.792Z",
        "updatedAt": "2017-01-17T14:40:46.792Z",
    }
]
```

###### Response codes

Code   | Name             | Description
-------|------------------|---------------------------------------------------
`200`  | `Ok`             | Projects has been retrieved

___

<span class="api method get">GET</span> <span class="api label">/v1/projects/`{id}`</span>

Get a single project.

###### Response

```json
{
    "id": "587e2ceeccb8b2921b3c6e2c",
    "identifier": "teleporter",
    "name": "Open Teleporter",
    "description": "A basic teleporter to allow anyone to move all around the world",
    "owner": "587e2ceeccb8b2921b3c6e2b",
    "createdAt": "2017-01-17T14:40:46.792Z",
    "updatedAt": "2017-01-17T14:40:46.792Z",
}
```

###### Parameters

Name           | In    | Type     | Required | Description
---------------|-------|----------|----------|-----------------------------------
`id`           | path  | string   | Yes      | Project ID

###### Response codes

Code   | Name             | Description
-------|------------------|---------------------------------------------------
`200`  | `Ok`             | Project has been retrieved
`404`  | `Not found`      | No Project exists for this ID

___

<span class="api method put">PUT</span> <span class="api label">/v1/projects/`{id}`</span>

Update the specified project.

###### body

```json
{
    "identifier": "open-teleporter",
    "description": "A full-feature teleporter to allow anyone to move all around the world",
}
```

###### Response

```json
{
    "id": "587e2ceeccb8b2921b3c6e2c",
    "identifier": "open-teleporter",
    "name": "Open Teleporter",
    "description": "A full-feature teleporter to allow anyone to move all around the world",
    "owner": "587e2ceeccb8b2921b3c6e2b",
    "createdAt": "2017-01-17T14:40:46.792Z",
    "updatedAt": "2017-01-17T14:40:46.792Z",
}
```

###### Parameters

Name           | In    | Type     | Required | Description
---------------|-------|----------|----------|-----------------------------------
`id`           | path  | string   | Yes      | ID for the project to update
`identifier`   | body  | string   | No       | Identifier for the project
`name`         | body  | string   | No       | Project name
`description`  | body  | string   | No       | Project short description
`owner`        | body  | string   | No       | Only the project owner can change the ownership. Be carreful, once it is done the previous owner will not own the project anymore.

###### Response codes

Code   | Name             | Description
-------|------------------|---------------------------------------------------
`20O`  | `Ok`             | Project has been correctly updated
`404`  | `Not found`      | No Project exists for this ID.
`400`  | `Bad Request`    | Request is either malformed or incomplete
`409`  | `Conflict`       | A project already exists with the same identifier

___

<span class="api method delete">DETELE</span> <span class="api label">/v1/projects/`{id}`</span>

Delete a single project.

###### Parameters

Name           | In    | Type     | Required | Description
---------------|-------|----------|----------|-----------------------------------
`id`           | path  | string   | Yes      | Project ID

###### Response codes

Code   | Name             | Description
-------|------------------|---------------------------------------------------
`204`  | `No content`     | Project has been delete
`404`  | `Not found`      | No project exists for this ID

___
