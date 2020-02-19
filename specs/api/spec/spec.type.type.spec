{
  "name": "type",
  "type": "Type",
  "description": "Defines a type in the furo spec",
  "__proto": {
    "package": "spec",
    "imports": [],
    "targetfile": "spec.proto"
  },
  "fields": {
    "name": {
      "description": "Name of the type",
      "type": "string",
      "meta": {
        "label": "name",
        "hint": "",
        "options": {}
      },
      "__proto": {
        "number": 1
      }
    },
    "type": {
      "description": "the type ",
      "type": "string",
      "meta": {
        "label": "type",
        "hint": "The typename, without package. i.e. Person",
        "options": {}
      },
      "__proto": {
        "number": 2
      }
    },
    "description": {
      "description": "the type description",
      "type": "string",
      "meta": {
        "label": "description",
        "hint": "Describe what this type is for",
        "options": {}
      },
      "__ui": {
        "component": "furo-data-textarea-input",
        "flags": ["full"]
      },
      "__proto": {
        "number": 3
      }
    },
    "__proto": {
      "description": "information for the proto generator, should be removed for the client spec",
      "meta": {
        "label": "proto"
      },
      "type": "spec.Typeproto",
      "__proto": {
        "number": 4
      }
    },
    "fields": {
      "description": "fields of a type",
      "type": "map<string,spec.Field>",
      "meta": {
        "label": "fields",
        "options": {}
      },

      "__proto": {
        "number": 5
      },
      "__ui": {
        "flags": ["full"]
      }
    }
  }
}
