import { View } from "react-native";
import NewTravelForm from "@/features/NewTravelForm";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <NewTravelForm />
    </View>
  );
}
