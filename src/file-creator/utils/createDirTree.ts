import { existsSync, mkdirSync } from "fs";
import { normalize, join } from "path";

export function createDirTree(path: string) {
  normalize(path)
    .split("\\")
    .reduce((acc, curr) => {
      const currPath = join(acc, curr);
      if (!existsSync(currPath)) {
        mkdirSync(currPath);
      }
      return currPath;
    }, ".");
}
