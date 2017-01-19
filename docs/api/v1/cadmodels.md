# CAD Models

<span class="api method post">POST</span> <span class="api label">/v1/projects/`{projectId}`/cadmodels</span>

Create a revision within a CAD model. A CAD model a descriptive document acting
as a container for CAD model revisions.

###### body

```json
{
    "name": "Open Teleporter Cabin",
    "description": "A teleportation cabin able to transport a human"
}
```

###### Response

```json
{
    "id": "5880b061ccb8b2921b3c6e30",
    "name": "Open Teleporter Cabin",
    "description": "A teleportation cabin able to transport a human",
    "owner": "5878b82aaf4966e10d1e0841",
    "createdAt": "2017-01-19T12:26:09.867Z",
    "updatedAt": "2017-01-19T12:26:09.867Z",
}
```

###### Parameters

Name           | In    | Type     | Required | Description
---------------|-------|----------|----------|-----------------------------------
`projectId`    | path  | string   | Yes      | Project ID
`name`         | body  | string   | Yes      | CAD model name
`description`  | body  | string   | No       | CAD Model description

###### Response codes

Code   | Name             | Description
-------|------------------|---------------------------------------------------
`201`  | `Created`        | CAD model has been correctly created
`409`  | `Conflict`       | A CAD model already exists with the same name
`400`  | `Bad Request`    | Request is either malformed or incomplete

___

<span class="api method get">GET</span> <span class="api label">/v1/projects/`{projectId}`/cadmodels</span>

Get all CAD models that belongs to a project.

###### Response

```json
[
  {
      "id": "5880b061ccb8b2921b3c6e30",
      "name": "Open Teleporter Cabin",
      "description": "A teleportation cabin able to transport a human",
      "owner": "5878b82aaf4966e10d1e0841",
      "createdAt": "2017-01-19T12:26:09.867Z",
      "updatedAt": "2017-01-19T12:26:09.867Z",
  }
]
```

###### Parameters

Name           | In    | Type     | Required | Description
---------------|-------|----------|----------|-----------------------------------
`projectId`    | path  | string   | Yes      | Project ID

###### Response codes

Code   | Name             | Description
-------|------------------|---------------------------------------------------
`200`  | `Ok`             | CAD models has been retrieved
`404`  | `Not found`      | Project does not exist

___

<span class="api method get">GET</span> <span class="api label">/v1/projects/`{projectId}`/cadmodels/`{id}`</span>

Get a single CAD Model.

###### Response

```json
{
    "id": "587e2ceeccb8b2921b3c6e2c",
    "identifier": "teleporter",
    "name": "Open Teleporter",
    "description": "A basic teleporter to allow anyone to move all around the world",
    "createdAt": "2017-01-17T14:40:46.792Z",
    "updatedAt": "2017-01-17T14:40:46.792Z",
}
```

###### Parameters

Name           | In    | Type     | Required | Description
---------------|-------|----------|----------|-----------------------------------
`projectId`    | path  | string   | Yes      | Project ID
`id`           | path  | string   | Yes      | CAD model ID

###### Response codes

Code   | Name             | Description
-------|------------------|---------------------------------------------------
`200`  | `Ok`             | Project has been retrieved
`404`  | `Not found`      | Project or CAD model does not exist

___

<span class="api method put">PUT</span> <span class="api label">/v1/projects/`{projectId}`/cadmodels/`{id}`</span>

Update the specified CAD Model.

###### body

```json
{
    "description": "A teleportation cabin able to transport two humans"
}
```

###### Response

```json
{
    "id": "5880b061ccb8b2921b3c6e30",
    "name": "Open Teleporter Cabin",
    "description": "A teleportation cabin able to transport two humans",
    "owner": "5878b82aaf4966e10d1e0841",
    "createdAt": "2017-01-19T12:26:09.867Z",
    "updatedAt": "2017-01-19T12:26:09.867Z",
}
```

###### Parameters

Name           | In    | Type     | Required | Description
---------------|-------|----------|----------|-----------------------------------
`projectId`    | path  | string   | Yes      | Project ID
`id`           | path  | string   | Yes      | CAD Model ID
`name`         | body  | string   | No       | CAD model name
`description`  | body  | string   | No       | CAD Model description


###### Response codes

Code   | Name             | Description
-------|------------------|---------------------------------------------------
`20O`  | `Ok`             | CAD model has been correctly updated
`404`  | `Not found`      | Project or CAD model does not exist
`400`  | `Bad Request`    | Request is either malformed or incomplete
`409`  | `Conflict`       | A CAD model already exists with the same name

___

<span class="api method delete">DETELE</span> <span class="api label">/v1/projects/`{projectId}`/cadmodels/`{id}`</span>

Delete a single CAD model.

###### Parameters

Name           | In    | Type     | Required | Description
---------------|-------|----------|----------|-----------------------------------
`projectId`    | path  | string   | Yes      | Project ID
`id`           | path  | string   | Yes      | CAD model ID

###### Response codes

Code   | Name             | Description
-------|------------------|---------------------------------------------------
`204`  | `No content`     | CAD model has been delete
`404`  | `Not found`      | Project or CAD model does not exist

___
