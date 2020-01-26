{
  "name": "fieldproto",
  "type": "Fieldproto",
  "description": "Proto options for a field",
  "__proto": {
    "package": "spec",
    "imports": [],
    "targetfile": "spec.proto"
  },
  "fields": {
    "number": {
      "description": "A hint",
      "type": "int32",
      "meta": {
        "label": "Proto field number",
        "hint": "must be unique in field"
      },
      "constraints": {
        "required": true
      },
      "__proto": {
        "number": 2
      },
      "__ui": {
        "component": "furo-data-number-input"
      }
    }
  }
}


