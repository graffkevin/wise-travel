import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native";

type IconName =
  | "home"
  | "user"
  | "search"
  | "bell"
  | "close"
  | "check"
  | "times"
  | "arrow-right"
  | "arrow-left";

interface IconButtonProps {
  onPress: () => void;
  iconName: IconName;
}

const IconButton = ({ onPress, iconName }: IconButtonProps) => (
  <TouchableOpacity onPress={onPress}>
    <Icon name={iconName} size={24} color="black" />
  </TouchableOpacity>
);

export default IconButton;
