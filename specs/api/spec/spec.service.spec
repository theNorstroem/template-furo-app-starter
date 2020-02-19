{
  "name": "SpecService",
  "description": "service specs for the spec api",
  "version": "0.0.1",
  "lifecycle": {
    "deprecated": false,
    "info": "This version is still valid"
  },
  "__proto": {
    "package": "specservice",
    "imports": [
      "spec/spec.proto",
      "google/protobuf/empty.proto"
    ],
    "targetfile": "specservice.proto"
  },
  "services": {
    "List": {
      "description": "The List method takes zero or more parameters as input, and returns a SpecCollection of SpecEntity that match the input parameters.",
      "rpc_name": "ListSpecs",
      "data": {
        "request": null,
        "response": "spec.SpecCollection"
      },
      "query": {
        "q": {
          "description": "Query term to search a spec",
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
        "href": "/api/specs",
        "method": "GET"
      }
    },
    "Create": {
      "description": "Creates a new Spec",
      "rpc_name": "CreateSpec",
      "data": {
        "request": "spec.Type",
        "response": "spec.SpecEntity"
      },
      "query": {
      },
      "deeplink": {
        "rel": "create",
        "href": "/api/specs",
        "method": "POST"
      }
    },
    "Get": {
      "description": "The Get method takes zero or more parameters, and returns a SpecEntity which contains a Spec",
      "rpc_name": "GetSpec",
      "data": {
        "request": null,
        "response": "spec.SpecEntity"
      },
      "query": {
      },
      "deeplink": {
        "rel": "self",
        "href": "/api/specs/{type}",
        "method": "GET"
      }
    },
    "Update": {
      "description": "Updates a Spec, partial updates are supported",
      "rpc_name": "UpdateSpec",
      "data": {
        "request": "spec.Type",
        "response": "spec.SpecEntity"
      },
      "query": {},
      "deeplink": {
        "rel": "update",
        "href": "/api/specs/{type}",
        "method": "PATCH"
      }
    },
    "Delete": {
      "description": "Delete a Spec",
      "rpc_name": "DeleteSpec",
      "data": {
        "request": "google.protobuf.Empty",
        "response": "google.protobuf.Empty"
      },
      "query": {},
      "deeplink": {
        "rel": "delete",
        "href": "/api/specs/{type}",
        "method": "DELETE"
      }
    }
  }
}
