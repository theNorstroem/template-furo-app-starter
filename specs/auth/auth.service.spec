{
  "name": "AuthService",
  "description": "service specs for the auth api",
  "version": "0.0.1",
  "lifecycle": {
    "deprecated": false,
    "info": "This version is still valid"
  },
  "__proto": {
    "package": "authservice",
    "imports": [
      "auth/auth.proto",
      "google/protobuf/empty.proto"
    ],
    "targetfile": "authservice.proto"
  },
  "services": {
    "List": {
      "description": "The List method takes zero or more parameters as input, and returns a AuthCollection of AuthEntity that match the input parameters.",
      "rpc_name": "ListAuths",
      "data": {
        "request": null,
        "response": "auth.AuthCollection"
      },
      "query": {
        "q": {
          "description": "Query term to search a auth",
          "type": "string",
          "meta": {
            "label": "Search",
            "hint": ""
          },
          "__proto": {
            "type": "string"
          }
        }
      },
      "deeplink": {
        "description":"Describe_the_query_params_if_you_have",
        "rel": "list",
        "href": "/api/auths",
        "method": "GET"
      }
    },
    "Create": {
      "description": "Creates a new Auth",
      "rpc_name": "CreateAuth",
      "data": {
        "request": "auth.Auth",
        "response": "auth.AuthEntity"
      },
      "query": {
      },
      "deeplink": {
        "rel": "create",
        "href": "/api/auths",
        "method": "POST"
      }
    },
    "Get": {
      "description": "The Get method takes zero or more parameters, and returns a AuthEntity which contains a Auth",
      "rpc_name": "GetAuth",
      "data": {
        "request": null,
        "response": "auth.AuthEntity"
      },
      "query": {
      },
      "deeplink": {
        "rel": "self",
        "href": "/api/auths/{qp}",
        "method": "GET"
      }
    },
    "Update": {
      "description": "Updates a Auth, partial updates are supported",
      "rpc_name": "UpdateAuth",
      "data": {
        "request": "auth.Auth",
        "response": "auth.AuthEntity"
      },
      "query": {},
      "deeplink": {
        "rel": "update",
        "href": "/api/auths/{qp}",
        "method": "PATCH"
      }
    },
    "Delete": {
      "description": "Logout ala delete a auth session",
      "rpc_name": "Logout",
      "data": {
        "request": "google.protobuf.Empty",
        "response": "google.protobuf.Empty"
      },
      "query": {},
      "deeplink": {
        "rel": "delete",
        "href": "/api/auth",
        "method": "DELETE"
      }
    }
  }
}
