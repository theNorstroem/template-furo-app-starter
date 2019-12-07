{
  "_writeprotection": false,
  "theme": "FormBaseTheme",
  "class_name": "TreeTreeDisplay",
  "component_name": "replace with component-name-form",
  "description": "Navigation tree type with recursive navigation nodes",
  "summary": "summary",
  "import_members": [
    [
      " LitElement, html, css ",
      "lit-element"
    ],
    [
      "Theme",
      "@furo/framework/theme"
    ],
    [
      "FBP",
      "@furo/fbp"
    ]
  ],
  "imports": [
    "@furo/data-input",
    "@furo/form",
    "./tree-navigationnode-display.js"
  ],
  "path": "src/project-components/demo",
  "style": {
    "children": {
      ":host([hidden])": {
        "children": {},
        "attributes": {
          "display": "none"
        }
      },
      ":host": {
        "children": {},
        "attributes": {
          "display": "block"
        }
      }
    },
    "attributes": {}
  },
  "properties": {},
  "template": [
    {
      "component": "furo-form",
      "description": "Form",
      "attributes": {
        "header-text": "${i18n.t('this.label')}",
        "secondary-text": "width:300px;margin:100px auto; border-top:5px solid #FEA248;"
      },
      "children": [],
      "fields": [
        {
          "field": "id",
          "component": "furo-data-display",
          "flags": [
            "condensed",
            "double",
            "noborder"
          ],
          "attributes": []
        },
        {
          "field": "description",
          "component": "furo-data-display",
          "flags": [
            "condensed",
            "double",
            "noborder"
          ],
          "attributes": []
        },
        {
          "field": "root",
          "component": "tree-navigationnode-display",
          "flags": [
            "condensed",
            "double",
            "noborder"
          ],
          "attributes": []
        }
      ]
    }
  ],
  "exposedWires": [
    {
      "name": "focus",
      "wire": "--focused",
      "description": "Setze den Fokus"
    }
  ],
  "keyboardShortcuts": [],
  "methods": {
    "bindData": {
      "description": "Use ƒ-bind-data to bind your data object\n und so",
      "args": "field",
      "code": "dGhpcy5fRkJQVHJpZ2dlcldpcmUoJy0tZGF0YScsIGRhdGEpOwogICAgdGhpcy5maWVsZCA9IGRhdGE7"
    }
  },
  "component": "tree-tree-display",
  "source": "specs/tree/tree.type.spec"
}