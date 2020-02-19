{
  "name": "field",
  "type": "Field",
  "description": "Defines a field in the furo spec",
  "__proto": {
    "package": "spec",
    "imports": [],
    "targetfile": "spec.proto"
  },
  "fields": {
    "type": {
      "description": "the field type, https://developers.google.com/protocol-buffers/docs/proto3#scalar",
      "meta": {
        "label": "type",
        "hint": "Use a scalar type or a already defined one"
      },
      "type": "string",
      "__proto": {
        "number": 2
      }
    },
    "description": {
      "description": "the field description",
      "meta": {
        "label": "description"
      },
      "type": "string",
      "__proto": {
        "number": 1
      },
      "__ui": {
        "component": "furo-data-textarea-input",
        "flags": [
          "full"
        ]
      }
    },
    "__proto": {
      "description": "information for the proto generator, like number, type",
      "type": "spec.Fieldproto",
      "meta": {
        "label": "proto"
      },
      "__proto": {
        "number": 6
      }
    },
    "meta": {
      "description": "meta information for the client, like label, default, repeated, options...",
      "type": "furo.FieldMeta",
      "meta": {
        "label": "meta"
      },
      "__proto": {
        "number": 3
      }
    },
    "constraints": {
      "description": "constraints for a field, like min{}, max{}, step{}",
      "type": "map<string,furo.FieldConstraint>",
      "meta": {
        "label": "constraints"
      },
      "__proto": {
        "number": 4
      },
      "__ui": {
        "flags": [
          "full"
        ]
      }
    }
  }
}
