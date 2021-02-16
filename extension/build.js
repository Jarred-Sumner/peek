const { build } = require("esbuild");

const watch = process.argv.join("").includes("watch");

build({
  bundle: true,
  entryPoints: ["./src/background.js", "./src/inject/inject.ts"],
  outdir: "./dist",
  outbase: "src",
  platform: "browser",
  minify: !watch,
  watch,
}).then((a) => console.log("Built.", a.warnings, a.outputFiles));
