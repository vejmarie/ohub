# CAD Model Revisions

<span class="api method post">POST</span> <span class="api label">/v1/projects/`{projectId}`/cadmodels/`{cadModelId}`/revisions</span>

Create a CAD model revision within a project. A CAD model revision is a descriptive document
containing metadata for a binary model file. For instance a [STEP](https://en.wikipedia.org/wiki/ISO_10303)
file.

###### body

```json
{
    "name": "v1.0",
    "description": "First stable release"
}
```

###### Response

```json
{
    "id": "5990b061ccb8b2921b3c6f41",
    "name": "v1.0",
    "description": "First stable release",
    "owner": "5880b061ccb8b2921b3c6e30",
    "createdAt": "2017-01-19T12:26:09.867Z",
    "updatedAt": "2017-01-19T12:26:09.867Z",
}
```

###### Parameters

Name           | In    | Type     | Required | Description
---------------|-------|----------|----------|-----------------------------------
`projectId`    | path  | string   | Yes      | Project ID
`cadModelId`   | path  | string   | Yes      | CAD model ID
`name`         | body  | string   | Yes      | Revision name
`description`  | body  | string   | No       | Revision description

###### Response codes

Code   | Name             | Description
-------|------------------|---------------------------------------------------
`201`  | `Created`        | Revision has been correctly created
`409`  | `Conflict`       | A revision already exists with the same name
`400`  | `Bad Request`    | Request is either malformed or incomplete
`404`  | `Not found`      | Project or CAD model does not exist

___

<span class="api method get">GET</span> <span class="api label">/v1/projects/`{projectId}`/cadmodels/`{cadModelId}`/revisions</span>

Get all revisions that belongs to a CAD model.

###### Response

```json
[
    {
        "id": "5990b061ccb8b2921b3c6f41",
        "name": "v1.0",
        "description": "First stable release",
        "owner": "5880b061ccb8b2921b3c6e30",
        "createdAt": "2017-01-19T12:26:09.867Z",
        "updatedAt": "2017-01-19T12:26:09.867Z",
    }
]
```

###### Parameters

Name           | In    | Type     | Required | Description
---------------|-------|----------|----------|-----------------------------------
`projectId`    | path  | string   | Yes      | Project ID
`cadModelId`   | path  | string   | Yes      | CAD model ID

###### Response codes

Code   | Name             | Description
-------|------------------|---------------------------------------------------
`200`  | `Ok`             | Revisions has been retrieved
`404`  | `Not found`      | Project or CAD model does not exist

___

<span class="api method get">GET</span> <span class="api label">/v1/projects/`{projectId}`/cadmodels/`{cadModelId}`/revisions/`{id}`</span>

Get a single CAD model revision.

###### Response

```json
{
    "id": "5990b061ccb8b2921b3c6f41",
    "name": "v1.0",
    "description": "First stable release",
    "owner": "5880b061ccb8b2921b3c6e30",
    "createdAt": "2017-01-19T12:26:09.867Z",
    "updatedAt": "2017-01-19T12:26:09.867Z",
}
```

###### Parameters

Name           | In    | Type     | Required | Description
---------------|-------|----------|----------|-----------------------------------
`projectId`    | path  | string   | Yes      | Project ID
`cadModelId`   | path  | string   | Yes      | CAD model ID
`id`           | path  | string   | Yes      | Revision ID

###### Response codes

Code   | Name             | Description
-------|------------------|---------------------------------------------------
`200`  | `Ok`             | Project has been retrieved
`404`  | `Not found`      | Project, CAD model or revision does not exist

___

<span class="api method put">PUT</span> <span class="api label">/v1/projects/`{projectId}`/cadmodels/`{cadModelId}`/revisions/`{id}`</span>

Update the specified revision.

###### body

```json
{
    "name": "v1.0rc0",
    "description": "First stable release candidate"
}
```

###### Response

```json
{
    "id": "5880b061ccb8b2921b3c6e30",
    "name": "v1.0rc0",
    "description": "First stable release candidate",
    "owner": "5880b061ccb8b2921b3c6e30",
    "createdAt": "2017-01-19T12:26:09.867Z",
    "updatedAt": "2017-01-19T12:26:09.867Z",
}
```

###### Parameters

Name           | In    | Type     | Required | Description
---------------|-------|----------|----------|-----------------------------------
`projectId`    | path  | string   | Yes      | Project ID
`cadModelId`   | path  | string   | Yes      | CAD Model ID
`id`           | path  | string   | Yes      | Revision ID
`name`         | body  | string   | No       | Revision name
`description`  | body  | string   | No       | Revision description


###### Response codes

Code   | Name             | Description
-------|------------------|---------------------------------------------------
`20O`  | `Ok`             | CAD model has been correctly updated
`404`  | `Not found`      | Project, CAD model or revision does not exist
`400`  | `Bad Request`    | Request is either malformed or incomplete
`409`  | `Conflict`       | A revision already exists with the same name

___

<span class="api method delete">DETELE</span> <span class="api label">/v1/projects/`{projectId}`/cadmodels/`{cadModelId}`/revisions/`{id}`</span>

Delete a single revision.

###### Parameters

Name           | In    | Type     | Required | Description
---------------|-------|----------|----------|-----------------------------------
`projectId`    | path  | string   | Yes      | Project ID
`cadModelId`   | path  | string   | Yes      | CAD Model ID
`id`           | path  | string   | Yes      | CAD model ID

###### Response codes

Code   | Name             | Description
-------|------------------|---------------------------------------------------
`204`  | `No content`     | CAD model has been delete
`404`  | `Not found`      | Project, CAD model or revision does not exist

___
