import { Logger } from "./Logger";
import { ansiFormatting } from "./ansi";

export type FormattingRules = keyof typeof ansiFormatting;

export const logger = new Logger();
