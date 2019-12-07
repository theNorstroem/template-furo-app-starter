{
  "_writeprotection": false,
  "theme": "FormBaseTheme",
  "class_name": "TreeNavigationnodeDisplay",
  "component_name": "replace with component-name-form",
  "description": "Item of the navigationtree",
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
    "@furo/form"
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
          "field": "secondary_text",
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
          "field": "icon",
          "component": "furo-data-display",
          "flags": [
            "condensed",
            "double",
            "noborder"
          ],
          "attributes": []
        },
        {
          "field": "key_words",
          "component": "furo-data-display",
          "flags": [
            "condensed",
            "double",
            "noborder"
          ],
          "attributes": []
        },
        {
          "field": "has_error",
          "component": "furo-data-display",
          "flags": [
            "condensed",
            "double",
            "noborder"
          ],
          "attributes": []
        },
        {
          "field": "open",
          "component": "furo-data-display",
          "flags": [
            "condensed",
            "double",
            "noborder"
          ],
          "attributes": []
        },
        {
          "field": "link",
          "component": "furo-data-display",
          "flags": [
            "condensed",
            "double",
            "noborder"
          ],
          "attributes": []
        },
        {
          "field": "is_group_label",
          "component": "furo-data-display",
          "flags": [
            "condensed",
            "double",
            "noborder"
          ],
          "attributes": []
        },
        {
          "field": "children",
          "component": "furo-data-repeat",
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
  "component": "tree-navigationnode-display",
  "source": "specs/tree/navigationnode.type.spec"
}