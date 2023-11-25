import { Logger } from "./Logger.js";
import { ansiFormatting } from "./ansi.js";

export type FormattingRules = keyof typeof ansiFormatting;

export const logger = new Logger();
