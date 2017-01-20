# Authentication

<span class="api method post">POST</span> <span class="api label">/v1/tokens</span>

Creates an authencation token.

###### body

```json
{
    "username": "georges",
    "password": "53cR3t"
}
```

###### Response

```json
{
  "token": "iYgLzjm+45EFRBX4rxyjZWt+qEs0snb0KNR4iW6JSOxyiWzFd6cmDb172OqWMQEcicsYbgotJ3/pZY4y/Xu7l1hlUDJkMxA585r9VX7cJDQ1azjcwt9N/WvbDJ5Iviflg4CPsrAceIGiHZVMAbpnD1y6WM1E+mMdsjbQsZaHRBWAz8zKKvZ4JkQzQvoH+LUabGwOvxyc/MV6xIFqcKQRAZQ==",
  "expires": "2016-10-13T12:05:55Z"
}
```

###### Parameters

Name           | In    | Type     | Required | Description
---------------|-------|----------|----------|-----------------------------------
`username`     | body  | string   | Yes      | Username
`password`     | body  | string   | Yes      | Password

###### Response codes

Code   | Name             | Description
-------|------------------|---------------------------------------------------
`201`  | `Created`        | Authentication succeed
`400`  | `Bad Request`    | Request is either malformed or incomplete
`403`  | `Not found`      | Incorrect Username / Password

___
