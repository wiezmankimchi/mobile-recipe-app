import { vars } from "nativewind";

import colors from "tailwindcss/colors";

const COLORS = {
  light: {
    primary: "#008DDA",
    text: "#5C2FC2",
    background: "#F7EEDD",
    card: "#F7EEDD",
    border: "#FF7F3E",
    destructive: "#FF0000",
    notification: "#FF7D29",
  },
  dark: {
    primary: "#DAFFFB",
    text: "#6FDCE3",
    background: "#04364A",
    card: "#04364A",
    border: "#FFDA78",
    destructive: "#FC2947",
    notification: "#FE6244",
  }
}


const LIGHT_THEME = {
  dark: false,
  colors: {
    primary: COLORS.light.primary,
    text: COLORS.light.text,
    background: COLORS.light.background,
    card: COLORS.light.card,
    border: COLORS.light.border,
    destructive: COLORS.light.destructive,
    notification: COLORS.light.notification,
  },
};
const DARK_THEME = {
  dark: true,
  colors: {
    primary: COLORS.dark.primary,
    text: COLORS.dark.text,
    background: COLORS.dark.background,
    card: COLORS.dark.card,
    border: COLORS.dark.border,
    destructive: COLORS.dark.destructive,
    notification: COLORS.dark.notification,
  },
};
const TW_LIGHT = vars({
    "--primary": COLORS.light.primary,
    "--text": COLORS.light.text,
    "--background": COLORS.light.background,
    "--card": COLORS.light.card,
    "--border": COLORS.light.border,
    "--destructive": COLORS.light.destructive,
    "--notification": COLORS.light.notification,
  })


  const  TW_DARK = vars({
    "--primary": COLORS.dark.primary,
    "--text": COLORS.dark.text,
    "--background": COLORS.dark.background,
    "--card": COLORS.dark.card,
    "--border": COLORS.dark.border,
    "--destructive": COLORS.dark.destructive,
    "--notification": COLORS.dark.notification,
  })

export const MAIN_THEME = {
  LIGHT_THEME,
  DARK_THEME,
};

export const TW_THEME = {
  light:TW_LIGHT, dark:TW_DARK
}



export const OTHER_THEME = {
  LIGHT_THEME: {
    dark: false,
    colors: {
      primary: colors.red[500],
      background: colors.white,
      card: colors.white,
      text: colors.gray[500],
      border: colors.red[400],
      destructive: colors.amber[500],
      notification: colors.orange[800],
    },
  },
  DARK_THEME: {
    dark: true,
    colors: {
      primary: colors.orange[500],
      background: colors.slate[700],
      card: colors.slate[700],
      text: colors.gray[50],
      border: colors.orange[400],
      destructive: colors.amber[800],
      notification: colors.yellow[800],
    },
  },
};

