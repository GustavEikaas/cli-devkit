import { join } from "path";
import { createDirTree } from "./utils/createDirTree.js";
import { processFile } from "./utils/processFile.js";
import { readTemplateDir } from "./utils/readTemplateDir.js";

export type CreateFilesOptions = {
  templateDir: string;
  replacer: Record<string, string>;
  targetDir: string;
};

const getSeparator = () => "\\";

export function createFiles(options: CreateFilesOptions) {
  //Read files
  const files = readTemplateDir(options);

  //Create out dir
  createDirTree(options.targetDir);

  //Process file directory tree
  files
    .map((filePath) =>
      filePath
        .split(getSeparator())
        .filter((fileName) => !fileName.includes(".template"))
    )
    .filter((filePathList) => !!filePathList.length)
    .forEach((filePathList) => {
      createDirTree(join(options.targetDir, ...filePathList));
    });

  //Process file contents
  files.forEach((file) => {
    processFile(options, file);
  });
}

createFiles({
  templateDir: "./files",
  replacer: { appName: "./App" },
  targetDir: "../out/files",
});
