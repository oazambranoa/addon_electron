const { utils: { fromBuildIdentifier } } = require("@electron-forge/core");
const path = require("path");

module.exports = {
  packagerConfig: {
    asar: true,
    out: "out",
    prune: true
  },
  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel"
    },
    // {
    //   name: "@electron-forge/maker-zip"
    // }
  ]
};