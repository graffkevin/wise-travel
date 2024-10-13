import { View } from "react-native";
import { Children, ReactNode } from "react";

interface StackProps {
  direction?: "row" | "column";
  spacing?: number;
  margin?: number;
  style?: object;
  children: ReactNode;
}

const Stack = ({
  direction = "column",
  spacing = 0,
  children,
  style,
}: StackProps) => {
  return (
    <View
      style={[
        {
          flexDirection: direction === "row" ? "row" : "column",
          justifyContent: "flex-start",
        },
        style,
      ]}
    >
      {Children.map(children, (child) => (
        <View
          style={{
            marginRight: direction === "row" ? spacing : 0,
            marginBottom: direction === "column" ? spacing : 0,
          }}
        >
          {child}
        </View>
      ))}
    </View>
  );
};

export default Stack;
