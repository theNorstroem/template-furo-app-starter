{
  "name": "tree",
  "type": "Tree",
  "description": "Navigation tree type with recursive navigation nodes",
  "__proto": {
    "package": "tree",
    "targetfile": "tree.proto",
    "imports": [],
    "options": null
  },
  "fields": {
    "id": {
      "type": "string",
      "description": "Id of the tree",
      "meta": {
        "label": "id",
        "hint": "node id, must be uique",
        "default": "",
        "readonly": false,
        "repeated": false,
        "options": {
          "list": []
        }
      },
      "constraints": null,
      "__proto": {
        "number": 1
      }
    },
    "display_name": {
      "type": "string",
      "description": "String representation of the tree",
      "meta": {
        "label": "display_name",
        "hint": "",
        "default": "",
        "readonly": true,
        "repeated": false,
        "options": {
          "list": []
        }
      },
      "constraints": null,
      "__proto": {
        "number": 2
      }
    },
    "secondary_text": {
      "type": "string",
      "description": "Secondary text of the node",
      "meta": {
        "label": "secondary_text",
        "hint": "",
        "default": "",
        "readonly": false,
        "repeated": false,
        "options": {
          "list": []
        }
      },
      "constraints": null,
      "__proto": {
        "number": 3
      }
    },
    "description": {
      "type": "string",
      "description": "description of the tree",
      "meta": {
        "label": "description",
        "hint": "",
        "default": "",
        "readonly": false,
        "repeated": false,
        "options": {
          "list": []
        },
        "__ui": {
          "component": "furo-data-textarea-input",
          "flags": ["full"]
        }
      },
      "constraints": null,
      "__proto": {
        "number": 4
      }
    },
    "root": {
      "type": "tree.Navigationnode",
      "description": "Rootnode of the tree",
      "meta": {
        "label": "Navigation node",
        "hint": "hint",
        "default": "",
        "readonly": false,
        "repeated": false,
        "options": {
          "list": []
        }
      },
      "constraints": null,
      "__proto": {
        "number": 10
      }
    }
  }
}
