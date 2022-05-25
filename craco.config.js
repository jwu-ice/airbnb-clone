// import CracoAlias from "craco-alias";
const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: { source: "tsconfig", tsConfigPath: "tsconfig.paths.json" },
    },
  ],
};