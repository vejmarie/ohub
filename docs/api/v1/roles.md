# Roles

A role is a collection of authorizations. Each project comes with three built-in roles `owner`,
`admin` and `member` with the following authorizations

Object             | Authorization  | Owner | Admin | Member
-------------------|----------------|-------|-------|--------
project            | update         | X     | X     |
project            | delete         | X     |       |
roles              | create         | X     | X     |
roles              | update         | X     | X     |
roles              | delete         | X     | X     |
memberships        | create         | X     | X     |
memberships        | update         | X     | X     |
memberships        | delete         | X     | X     |
cadmodels          | create         | X     | X     | X
cadmodels          | update         | X     | X     | X
cadmodels          | delete         | X     | X     |
cadmodelrevisions  | create         | X     | X     | X
cadmodelrevisions  | update         | X     | X     | X
cadmodelrevisions  | delete         | X     | X     |

Those three roles cannot be deleted by anyone.

There's no authorization regarding `read` as long as all projects are public. There is an
implicit `read` permission for everyone on everything.

In API requests and responses, authorizations are formating like `{object}::{authorization}`. For instance,
`project:update` or `cadmodels:delete`.

___

<span class="api method post">POST</span> <span class="api label">/v1/projects/`{projectId}`/roles</span>

Create a role for this projects

###### body

```json
{
    "name": "Team leader",
    "identifier": "leader",
    "authorizations": [
      "cadmodels::create",
      "cadmodels::update",
      "cadmodels::delete",
      "cadmodelrevisions::create",
      "cadmodelrevisions::update",
      "cadmodelrevisions::delete"
    ]
}
```

###### Response

```json
{
    "id": "ac4387cdccb8b0921b3c39f3",
    "name": "Team leader",
    "identifier": "leader",
    "authorizations": [
      "cadmodels::create",
      "cadmodels::update",
      "cadmodels::delete",
      "cadmodelrevisions::create",
      "cadmodelrevisions::update",
      "cadmodelrevisions::delete"
    ],
    "createdAt": "2017-01-17T14:40:46.792Z",
    "updatedAt": "2017-01-17T14:40:46.792Z"
}
```

###### Parameters

Name             | In    | Type     | Required | Description
-----------------|-------|----------|----------|-----------------------------------
`projectId`      | path  | string   | Yes      | Project ID
`name`           | body  | string   | Yes      | Role name
`identifier`     | body  | string   | Yes      | Role identifier
`authorizations` | body  | string[] | Yes      | Authorization list

###### Response codes

Code   | Name             | Description
-------|------------------|---------------------------------------------------
`201`  | `Created`        | Role has been correctly created
`409`  | `Conflict`       | A role already exists with the same identifier
`400`  | `Bad Request`    | Request is either malformed or incomplete
`404`  | `Not Found`      | Project does not exists

___

<span class="api method get">GET</span> <span class="api label">/v1/projects/`{projectId}`/roles</span>

List roles for this project

###### Response

```json
[
  {
      "id": "b74387cdccb8b0921b3c37d4",
      "name": "Owner",
      "identifier": "owner",
      "authorizations": [
         ...
      ],
      "createdAt": "2017-01-17T14:40:46.792Z",
      "updatedAt": "2017-01-17T14:40:46.792Z"
  },
  {
      "id": "3ad387cdccb8b0921b3c39ec",
      "name": "Administrator",
      "identifier": "admin",
      "authorizations": [
         ...
      ],
      "createdAt": "2017-01-17T14:40:46.792Z",
      "updatedAt": "2017-01-17T14:40:46.792Z"
  },
  {
      "id": "214387cdccb8b0921b3c3e4b",
      "name": "Member",
      "identifier": "member",
      "authorizations": [
         ...
      ],
      "createdAt": "2017-01-17T14:40:46.792Z",
      "updatedAt": "2017-01-17T14:40:46.792Z"
  },
  {
      "id": "ac4387cdccb8b0921b3c39f3",
      "name": "Team leader",
      "identifier": "leader",
      "authorizations": [
        "cadmodels::create",
        "cadmodels::update",
        "cadmodels::delete",
        "cadmodelrevisions::create",
        "cadmodelrevisions::update",
        "cadmodelrevisions::delete"
      ],
      "createdAt": "2017-01-17T14:40:46.792Z",
      "updatedAt": "2017-01-17T14:40:46.792Z"
  }
]
```

###### Parameters

Name             | In    | Type     | Required | Description
-----------------|-------|----------|----------|-----------------------------------
`projectId`      | path  | string   | Yes      | Project ID

###### Response codes

Code   | Name             | Description
-------|------------------|---------------------------------------------------
`200`  | `Ok`             | Role list has been correctly retrieved
`404`  | `Not Found`      | Project does not exists

___

<span class="api method get">GET</span> <span class="api label">/v1/projects/`{projectId}`/roles/`{id}`</span>

List roles for this project

###### Response

```json
{
    "id": "b74387cdccb8b0921b3c37d4",
    "name": "Owner",
    "identifier": "owner",
    "authorizations": [
        ...
    ],
    "createdAt": "2017-01-17T14:40:46.792Z",
    "updatedAt": "2017-01-17T14:40:46.792Z"
}
```

###### Parameters

Name             | In    | Type     | Required | Description
-----------------|-------|----------|----------|-----------------------------------
`id`             | path  | string   | Yes      | Role ID
`projectId`      | path  | string   | Yes      | Project ID

###### Response codes

Code   | Name             | Description
-------|------------------|---------------------------------------------------
`200`  | `Ok`             | Role has been correctly retrieved
`404`  | `Not Found`      | Project or role does not exists

___

<span class="api method put">PUT</span> <span class="api label">/v1/projects/`{projectId}`/roles/`{id}`</span>

Update a role.

###### body

```json
{
    "name": "Team leader",
    "authorizations": [
      "cadmodels::create",
      "cadmodels::update",
      "cadmodels::delete",
      "cadmodelrevisions::create",
      "cadmodelrevisions::update",
      "cadmodelrevisions::delete",
      "memberships::create",
      "memberships::update",
      "memberships::delete"
    ]
}
```

###### Response

```json
{
    "id": "ac4387cdccb8b0921b3c39f3",
    "name": "Team leader",
    "identifier": "leader",
    "authorizations": [
      "cadmodels::create",
      "cadmodels::update",
      "cadmodels::delete",
      "cadmodelrevisions::create",
      "cadmodelrevisions::update",
      "cadmodelrevisions::delete",
      "memberships::create",
      "memberships::update",
      "memberships::delete"
    ],
    "createdAt": "2017-01-17T14:40:46.792Z",
    "updatedAt": "2017-01-17T14:40:46.792Z"
}
```

###### Parameters

Name             | In    | Type     | Required | Description
-----------------|-------|----------|----------|-----------------------------------
`id`             | path  | string   | Yes      | Role ID
`projectId`      | path  | string   | Yes      | Project ID
`name`           | body  | string   | No       | Role name
`authorizations` | body  | string[] | No       | Authorization list

###### Response codes

Code   | Name             | Description
-------|------------------|---------------------------------------------------
`200`  | `Ok`             | Role has been correctly created
`400`  | `Bad Request`    | Request is either malformed or incomplete
`404`  | `Not Found`      | Project or role does not exists

___

<span class="api method delete">DELETE</span> <span class="api label">/v1/projects/`{projectId}`/roles/`{id}`</span>

Delete a role

###### Parameters

Name             | In    | Type     | Required | Description
-----------------|-------|----------|----------|-----------------------------------
`id`             | path  | string   | Yes      | Role ID
`projectId`      | path  | string   | Yes      | Project ID

###### Response codes

Code   | Name             | Description
-------|------------------|---------------------------------------------------
`204`  | `No Content`     | Role has been successfully deleted
`404`  | `Not Found`      | Project or role does not exists
`409`  | `Not Found`      | Role is assigned to at least one user or this role cannot be deleted

___
