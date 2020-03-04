{
  "name": "task",
  "type": "Task",
  "description": "Task data description",
  "__proto": {
    "package": "task",
    "targetfile": "task.proto",
    "imports": [
      "furo/reference.proto"
    ],
    "options": null
  },
  "fields": {
    "id": {
      "type": "string",
      "description": "Identity of a task",
      "__proto": {
        "number": 1
      },
      "__ui": {
        "component": "",
        "flags": [],
        "no_init": false,
        "no_skip": false
      },
      "meta": {
        "label": "Id",
        "hint": "",
        "default": "",
        "readonly": true,
        "repeated": false,
        "options": {
          "list": [],
          "flags": null
        }
      },
      "constraints": null
    },
    "display_name": {
      "type": "string",
      "description": "Localized String representation of a task",
      "__proto": {
        "number": 2
      },
      "__ui": {
        "component": "",
        "flags": [],
        "no_init": false,
        "no_skip": false
      },
      "meta": {
        "label": "task.display_name.label",
        "hint": "task.display_name.hint",
        "default": "",
        "readonly": true,
        "repeated": false,
        "options": {
          "list": [],
          "flags": null
        }
      },
      "constraints": null
    },
    "description": {
      "type": "string",
      "description": "Short task description",
      "__proto": {
        "number": 3
      },
      "__ui": {
        "component": "",
        "flags": [],
        "no_init": false,
        "no_skip": false
      },
      "meta": {
        "label": "task.desc.label",
        "hint": "",
        "default": "",
        "readonly": false,
        "repeated": false,
        "options": {
          "list": [],
          "flags": null
        }
      },
      "constraints": {
        "required": {
          "is": "true",
          "message": "is required"
        },
        "max": {
          "is": 180,
          "message": "task.desc.maxlength"
        }
      }
    },
    "estimated_time": {
      "type": "int32",
      "description": "Estimated time in days",
      "__proto": {
        "number": 4
      },
      "__ui": {
        "component": "",
        "flags": [],
        "no_init": false,
        "no_skip": false
      },
      "meta": {
        "label": "Est. days",
        "hint": "",
        "default": "",
        "readonly": false,
        "repeated": false,
        "options": {
          "list": [],
          "flags": null
        }
      },
      "constraints": null
    },
    "owner": {
      "type": "furo.Reference",
      "description": "Owner of a task",
      "__proto": {
        "number": 5
      },
      "__ui": {
        "component": "",
        "flags": [],
        "no_init": false,
        "no_skip": false
      },
      "meta": {
        "label": "person.type.sex.label",
        "hint": "",
        "default": {
          "link": {
            "rel": "list",
            "href": "/mockdata/persons/list.json",
            "method": "GET",
            "type": "person.Person",
            "service": "PersonService"
          }
        },
        "readonly": false,
        "repeated": false,
        "options": {
          "list": [
            {
              "id": "unknown",
              "display_name": "person.type.sex.unknown.label",
              "selected": false,
              "@type": "type.googleapis.com/furo.Optionitem"
            },
            {
              "id": "female",
              "display_name": "person.type.sex.female.label",
              "selected": true,
              "@type": "type.googleapis.com/furo.Optionitem"
            },
            {
              "id": "male",
              "display_name": "person.type.sex.male.label",
              "selected": false,
              "@type": "type.googleapis.com/furo.Optionitem"
            }
          ],
          "flags": null
        }
      },
      "constraints": null
    },
    "subtasks": {
      "type": "task.Task",
      "description": "List of subtasks",
      "__proto": {
        "number": 6
      },
      "__ui": {
        "component": "",
        "flags": [],
        "no_init": false,
        "no_skip": false
      },
      "meta": {
        "label": "Subtask",
        "hint": "",
        "default": "",
        "readonly": false,
        "repeated": true,
        "options": {
          "list": [],
          "flags": null
        }
      },
      "constraints": null
    }
  }
}