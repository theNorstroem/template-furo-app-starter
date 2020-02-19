{
  "name": "typeproto",
  "type": "Typeproto",
  "description": "Main proto for a type",
  "__proto": {
    "package": "spec",
    "imports": [
      "google/protobuf/any.proto"
    ],
    "targetfile": "spec.proto"
  },
  "fields": {
    "package": {
      "description": "the package this type belogs to",
      "type": "string",
      "meta": {
        "label": "package"
      },
      "__proto": {
        "number": 1
      }
    },
    "targetfile": {
      "description": "the target proto file for this type",
      "type": "string",
      "meta": {
        "label": "targetfile"
      },
      "__proto": {
        "number": 3
      }
    },
    "imports": {
      "description": "needed imports like [ \"spec/spec.proto\", \"google/protobuf/empty.proto\" ]",
      "type": "string",
      "meta": {
        "repeated": true,
        "label": "imports"
      },
      "__proto": {
        "number": 2
      }
    },
    "options": {
      "description": "Proto options Todo: find a solution for boolean options",
      "type": "map<string,string>",
      "meta": {
        "label": "Proto options"
      },
      "__proto": {
        "number": 4
      }
    }
  }
}


