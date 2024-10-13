import React, { FC, ReactNode } from "react";
import { Card as RNECard, CardProps as RNECardProps } from "@rneui/base";
import { StyleProp, ViewStyle } from "react-native";

type CustomCardProps = RNECardProps & {
  children?: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
};

const Card: FC<CustomCardProps> = ({ containerStyle, children, ...props }) => {
  return (
    <RNECard
      containerStyle={[
        {
          borderRadius: 8,
          elevation: 3,
          borderColor: "black",
          borderWidth: 0.3,
        },
        containerStyle,
      ]}
      {...props}
    >
      {children}
    </RNECard>
  );
};

export default Card;
