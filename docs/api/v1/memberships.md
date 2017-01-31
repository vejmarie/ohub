# Memberships

<span class="api method post">POST</span> <span class="api label">/v1/projects/`{projectId}`/memberships</span>

Create a member relationship between a user and a project. Available roles can be listed resquesting using the [roles](roles.md) API.

###### body

```json
{
    "username": "ringo.starr@opencompute.org",
    "role": "administrator"
}
```

###### Response

```json
{
    "id": "4973fceeccb8b0921b3c38fd",
    "username": "ringo.starr@opencompute.org",
    "role": "administrator",
    "createdAt": "2017-01-17T14:40:46.792Z",
    "updatedAt": "2017-01-17T14:40:46.792Z"
}
```

###### Parameters

Name           | In    | Type     | Required | Description
---------------|-------|----------|----------|-----------------------------------
`projectId`    | path  | string   | Yes      | Project ID
`username`     | body  | string   | Yes      | Member username
`role`         | body  | string   | Yes      | Role identifier

###### Response codes

Code   | Name             | Description
-------|------------------|---------------------------------------------------
`201`  | `Created`        | Membership has been correctly created
`409`  | `Conflict`       | A membership already exists for this user
`400`  | `Bad Request`    | Request is either malformed or incomplete
`404`  | `Not Found`      | Project does exist

___

<span class="api method get">GET</span> <span class="api label">/v1/projects/`{projectId}`/memberships</span>

List memberships for a project.

###### Response

```json
[
    {
        "id": "4973fceeccb8b0921b3c38fd",
        "username": "ringo.starr@opencompute.org",
        "role": "administrator",
        "createdAt": "2017-01-17T14:40:46.792Z",
        "updatedAt": "2017-01-17T14:40:46.792Z"
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
`200`  | `Ok`             | Membership list has been correctly returned
`404`  | `Not Found`      | Project does exist

___

<span class="api method get">GET</span> <span class="api label">/v1/projects/`{projectId}`/memberships/`{id}`</span>

Get a single membership for a project.

###### Response

```json
{
    "id": "4973fceeccb8b0921b3c38fd",
    "username": "ringo.starr@opencompute.org",
    "role": "administrator",
    "createdAt": "2017-01-17T14:40:46.792Z",
    "updatedAt": "2017-01-17T14:40:46.792Z"
}
```

###### Parameters

Name           | In    | Type     | Required | Description
---------------|-------|----------|----------|-----------------------------------
`projectId`    | path  | string   | Yes      | Project ID
`id`           | path  | string   | Yes      | Membership ID

###### Response codes

Code   | Name             | Description
-------|------------------|---------------------------------------------------
`200`  | `Ok`             | Membership has been correctly returned
`404`  | `Not Found`      | Project or membership does exist

___

<span class="api method put">PUT</span> <span class="api label">/v1/projects/`{projectId}`/memberships/`{id}`</span>

Update a single membership for a project. The only reason to update a membership is to change the user's role.

###### Response

```json
{
    "role": "member"
}
```

###### Parameters

Name           | In    | Type     | Required | Description
---------------|-------|----------|----------|-----------------------------------
`projectId`    | path  | string   | Yes      | Project ID
`id`           | path  | string   | Yes      | Membership ID
`role`         | body  | string   | Yes      | Role for the user

###### Response codes

Code   | Name             | Description
-------|------------------|---------------------------------------------------
`200`  | `Ok`             | Membership has been correctly returned
`400`  | `Bad Request`    | Request is either malformed or incomplete
`404`  | `Not Found`      | Project or membership does exist

___

<span class="api method delete">DELETE</span> <span class="api label">/v1/projects/`{projectId}`/memberships/`{id}`</span>

Delete a membership on a project.

###### Parameters

Name           | In    | Type     | Required | Description
---------------|-------|----------|----------|-----------------------------------
`projectId`    | path  | string   | Yes      | Project ID
`id`           | path  | string   | Yes      | Membership ID

###### Response codes

Code   | Name             | Description
-------|------------------|---------------------------------------------------
`204`  | `No Content`     | Membership has been correctly deleted
`404`  | `Not Found`      | Project or membership does exist

___
