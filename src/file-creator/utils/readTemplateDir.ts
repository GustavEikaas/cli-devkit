import { readdirSync } from "fs";
import { CreateFilesOptions } from "../index.js";

/**
 * Reads the template dir and returns a list of all files ending with
 * @param options
 * @returns
 */
export function readTemplateDir(options: CreateFilesOptions) {
  return readdirSync(options.templateDir, { recursive: true })
    .filter((s): s is string => typeof s === "string")
    .filter((s) => s.endsWith(".template"));
}
