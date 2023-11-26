import { readFileSync } from "fs";
import { resolve } from "path";

import { z } from "zod";
import { logger } from "../index.js";

const PackageJsonSchema = z.object({
  name: z.string(),
  version: z.string(),
  description: z.string().optional(),
});

/**
 * Function for parsing a package.json
 */
export function parsePackageJson(
  path = "./package.json"
): (typeof PackageJsonSchema)["_type"] {
  try {
    const packageJson = readPackageJson(path);
    const validatedPackageJson = validatePackageJsonContents(packageJson);
    return validatedPackageJson;
  } catch (e) {
    logger.exception("Failed to find package.json");
    throw new Error("");
  }
}

function readPackageJson(path: string) {
  const location = resolve(path);
  const contents = readFileSync(location, { encoding: "utf8" });

  const packageJson = JSON.parse(contents);
  return packageJson;
}

function validatePackageJsonContents(a: Record<PropertyKey, unknown>) {
  try {
    return PackageJsonSchema.parse(a);
  } catch (e) {
    throw new Error("Failed to parse package.json", { cause: e });
  }
}
