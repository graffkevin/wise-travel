import { Dimensions, View } from "react-native";
import NewTravelForm from "@/features/NewTravelForm";
import Calendar from "@/features/Calendar/Calendar";

export default function Index() {
  const screenWidth = Dimensions.get("window").width;

  return (
    <View
      style={{
        flex: 1,
        top: 10,
        padding: 10,
        // justifyContent: "center",
        // alignItems: "center",
        width: screenWidth,
      }}
    >
      <NewTravelForm />
      <Calendar />
    </View>
  );
}
