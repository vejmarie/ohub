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
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9qZWN0cyI6W10sImZpcnN0bmFtZSI6IkpvaG4iLCJsYXN0bmFtZSI6Ikxlbm9uIiwiZW1haWwiOiJhZG1pbkBvcGVuY29tcHV0ZS5vcmciLCJwYXNzd29yZCI6IiQyYSQxMCRtRk1IZWNtNWJhNGVzZmRKNnBsOFhldHBiQ29hZTBuemZRR2FwWGllaU03NTVWd2NsUnpFYSIsImNyZWF0ZWRBdCI6IjIwMTctMDEtMjZUMTY6MjE6NDQuMDgwWiIsInVwZGF0ZWRBdCI6IjIwMTctMDEtMjZUMTY6MjE6NDQuMDgwWiIsImlkIjoiNTg4YTIyMTg0Y2VlOTczZDI4OGE4MmVjIiwiaWF0IjoxNDg1NDQ3NzE2LCJleHAiOjE0ODU0NTEzMTZ9.w_-RFs4l6DPZoNbQPY6acW3Cn2No3_3_FT3IslzGESw",
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
