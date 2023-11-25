import { createFiles } from "../../src/file-creator/index.js";

createFiles({
  replacer: {
    appName: "abc",
  },
  templateDir: "./files",
  targetDir: "./out",
});
