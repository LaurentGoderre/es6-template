/* eslint no-unused-vars: 0 */
/* eslint-env node */
const name = require("./package.json").name;

module.exports = {
  files: "dist/*.html",
  from: [
    / type="module"/g,
    /src\/index.js/g
  ],
  to: [
    "",
    `${name}.min.js`
  ]
};
