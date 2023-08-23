import { ansiFormatting } from "./ansi";
import { FormattingRules } from "./log";

type LoggerCtor = {
  globalFormatting?: FormattingRules[];
  successFormatting?: FormattingRules[];
  warningFormatting?: FormattingRules[];
  errorFormatting?: FormattingRules[];
  infoFormatting?: FormattingRules[];
};

const escapeSequence = (chars: string) => `\x1b[${chars}m`;

export class Logger {
  private successFormatting: FormattingRules[] = ["Bright Green[FG]"];
  private warningFormatting: FormattingRules[] = ["Bright Yellow[FG]"];
  private errorFormatting: FormattingRules[] = ["Bright Red[FG]"];
  private infoFormatting: FormattingRules[] = [];
  private globalFormatting: FormattingRules[] = [];

  constructor(formattingRules?: LoggerCtor) {
    if (!formattingRules) return;

    formattingRules.globalFormatting &&
      (this.globalFormatting = formattingRules.globalFormatting);

    formattingRules.successFormatting &&
      (this.successFormatting = formattingRules.successFormatting);

    formattingRules.warningFormatting &&
      (this.warningFormatting = formattingRules.warningFormatting);

    formattingRules.errorFormatting &&
      (this.errorFormatting = formattingRules.errorFormatting);

    formattingRules.infoFormatting &&
      (this.infoFormatting = formattingRules.infoFormatting);
  }

  private print(text: string, ...args: FormattingRules[]) {
    console.log(
      `${escapeSequence(
        args.map((s) => ansiFormatting[s]).join(";")
      )}${text}${escapeSequence("0")}`
    );
  }

  success = (msg: string) =>
    this.print(msg, ...[...this.globalFormatting, ...this.successFormatting]);

  warning = (msg: string) =>
    this.print(msg, ...[...this.globalFormatting, ...this.warningFormatting]);

  error = (msg: string) =>
    this.print(msg, ...[...this.globalFormatting, ...this.errorFormatting]);

  info = (msg: string, ...args: FormattingRules[]) =>
    this.print(
      msg,
      ...[...this.globalFormatting, ...this.infoFormatting, ...args]
    );
}
