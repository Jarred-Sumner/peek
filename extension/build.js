const { build } = require("esbuild");

build({
  bundle: true,
  entryPoints: ["./src/background.js", "./src/inject/inject.js"],
  outdir: "./dist",
  outbase: "src",
  platform: "browser",
  minify: true,
}).then((a) => console.log("Built.", a.warnings, a.outputFiles));
