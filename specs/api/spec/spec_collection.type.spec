{
  "name": "spec_collection",
  "type": "SpecCollection",
  "description": "SpecCollection with repeated SpecEntity",
  "__proto": {
    "package": "spec",
    "imports": [
      "furo/meta.proto",
      "furo/link.proto"
    ],
    "targetfile": "spec.proto"
  },
  "fields": {
    "meta": {
      "description": "Meta for the response",
      "type": "furo.Meta",
      "__proto": {
        "number": 2
      }
    },
    "links": {
      "description": "Hateoas links",
      "type": "furo.Link",
      "meta": {
        "repeated": true
      },
      "__proto": {
        "number": 3
      }
    },
    "entities": {
      "description": "Contains a spec.SpecEntity repeated",
      "type": "spec.SpecEntity",
      "meta": {
        "repeated": true
      },
      "__proto": {
        "number": 4
      }
    }
  }
}
