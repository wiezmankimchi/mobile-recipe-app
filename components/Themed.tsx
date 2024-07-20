/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
  Text as DefaultText,
  View as DefaultView,
  ViewProps as DefaultViewProps,
} from "react-native";
import { useColorScheme } from "nativewind";
import { TW_THEME } from "@/lib/constants";

import Colors from "../constants/Colors";
import { cn } from "@/lib/utils";

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const { colorScheme } = useColorScheme() ?? "light";
  const colorFromProps = props[colorScheme ?? "light"];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[colorScheme ?? "light"][colorName];
  }
}

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function Themed(props: ViewProps) {
  const { colorScheme } = useColorScheme();
  return (
    <View style={TW_THEME[colorScheme ?? "light"]}>
      {/* <View className={cn("bg-background", props.className)}> */}
      {props.children}
      {/* </View> */}
    </View>
  );
}
