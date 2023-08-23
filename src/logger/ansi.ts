/**
 * [PS] Poor support
 * [BG] Background
 * [FG] Foreground
 */
export const ansiFormatting = {
  ["Reset"]: 0,
  ["Bold"]: 1,
  /** Not widely supported */
  ["Faint[PS]"]: 2,
  /** Not widely supported */
  ["Italic[PS]"]: 3,
  ["Underline"]: 4,
  ["Slow Blink"]: 5,
  /** Not widely supported */
  ["Rapid Blink[PS]"]: 6,
  ["Reverse video"]: 7,
  /** Not widely supported */
  ["Conceal[PS]"]: 8,
  /** Not widely supported */
  ["Crossed out[PS]"]: 9,
  /** Usually unsupported */
  ["Fraktur[PS]"]: 20,
  ["Bold off or Double Underline[PS]"]: 21,
  ["Black[FG]"]: 30,
  ["Red[FG]"]: 31,
  ["Green[FG]"]: 32,
  ["Yellow[FG]"]: 33,
  ["Blue[FG]"]: 34,
  ["Magenta[FG]"]: 35,
  ["Cyan[FG]"]: 36,
  ["White[FG]"]: 37,
  ["Black[BG]"]: 40,
  ["Red[BG]"]: 41,
  ["Green[BG]"]: 42,
  ["Yellow[BG]"]: 43,
  ["Blue[BG]"]: 44,
  ["Magenta[BG]"]: 45,
  ["Cyan[BG]"]: 46,
  ["White[BG]"]: 47,
  ["Bright black[BG]"]: 100,
  ["Bright Red[BG]"]: 101,
  ["Bright Green[BG]"]: 102,
  ["Bright Yellow[BG]"]: 103,
  ["Bright Blue[BG]"]: 104,
  ["Bright Magenta[BG]"]: 105,
  ["Bright Cyan[BG]"]: 106,
  ["Bright White[BG]"]: 107,
  ["Bright black[FG]"]: 90,
  ["Bright Red[FG]"]: 91,
  ["Bright Green[FG]"]: 92,
  ["Bright Yellow[FG]"]: 93,
  ["Bright Blue[FG]"]: 94,
  ["Bright Magenta[FG]"]: 95,
  ["Bright Cyan[FG]"]: 96,
  ["Bright White[FG]"]: 97,
  //bright
  ["Framed"]: 51,
  ["Encircled"]: 52,
  ["Overlined"]: 53,
  ["Not framed or encircled"]: 54,
  ["Not overlined"]: 55,
  ["ideogram underline[PS]"]: 60,
  ["ideogram double underline[PS]"]: 61,
  ["ideogram overline[PS]"]: 62,
  ["ideogram double overline[PS]"]: 63,
  ["ideogram stress marking[PS]"]: 64,
  ["ideogram reset[PS]"]: 65,
};
