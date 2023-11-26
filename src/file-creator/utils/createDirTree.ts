import { mkdirSync } from "fs";

export function createDirTree(path: string) {
  mkdirSync(path, { recursive: true });
}
