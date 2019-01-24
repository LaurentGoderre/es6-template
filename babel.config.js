/* eslint-env node */
module.exports = {
  "presets": [
    ["@babel/env", {
      "useBuiltIns": "usage",
    }],
  ],
  "env": {
    "node": {
      "presets": [
        ["@babel/env", {
          "targets": {"node": 8},
          "useBuiltIns": "usage"
        }],
      ],
    }
  },
  "plugins": ["@babel/plugin-proposal-object-rest-spread"],
  "ignore": [
    /core-js/,
    /@babel\/runtime/
  ]
};
