import React, { FC } from "react";
import { Text, TextStyle, StyleProp } from "react-native";

const typographyVariants = {
  h1: { fontSize: 32, fontWeight: "bold" } as TextStyle,
  h2: { fontSize: 28, fontWeight: "bold" } as TextStyle,
  h3: { fontSize: 24, fontWeight: "bold" } as TextStyle,
  body1: { fontSize: 16, fontWeight: "normal" } as TextStyle,
  body2: { fontSize: 14, fontWeight: "normal" } as TextStyle,
  caption: { fontSize: 12, fontWeight: "normal" } as TextStyle,
};

type TypographyProps = {
  variant?: keyof typeof typographyVariants;
  align?: "left" | "center" | "right" | "justify";
  color?: string;
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
};

const Typography: FC<TypographyProps> = ({
  variant = "body1",
  align = "left",
  color = "#000",
  style,
  children,
}) => {
  return (
    <Text
      style={[typographyVariants[variant], { textAlign: align, color }, style]}
    >
      {children}
    </Text>
  );
};

export default Typography;
