import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { CreateFilesOptions } from "../index.js";
import { logger } from "../../logger/log.js";

export function processFile(options: CreateFilesOptions, file: string) {
  const contentsPath = join(options.templateDir, file);
  console.log(`reading ${contentsPath}`);
  const contents = readFileSync(contentsPath);
  const newContent = replaceFromTemplateFile(options, contents);
  writeFileSync(join(options.targetDir, file), newContent);
}

const replaceFromTemplateFile = (opt: CreateFilesOptions, contents: Buffer) => {
  let value = contents.toString("utf-8");
  Object.entries(opt.replacer).forEach(([key, val]) => {
    value = value.replaceAll(`<TEMPLATE={${key}}>`, val);
  });

  const unhandled = value.match(new RegExp("<TEMPLATE={[^}]*}>"));

  if (unhandled) {
    logger.exception(`Unhandled template variable ${unhandled[0]}`);
  }

  return value;
};
