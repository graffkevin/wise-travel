import React, { FC, ReactNode } from "react";
import { Card as RNECard, CardProps as RNECardProps } from "@rneui/base";
import { StyleProp, ViewStyle, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

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
          width: screenWidth - 20,
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

Card.defaultProps = {
  containerStyle: { padding: 10, margin: 10 },
};

export default Card;
