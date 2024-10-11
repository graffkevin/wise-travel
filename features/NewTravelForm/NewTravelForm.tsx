import { Box } from "@/components/ui/box";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";

const NewTravelForm = () => {
  return (
    <VStack space="lg" style={{ alignItems: "center" }}>
      <Box style={{ height: 80, width: 80, backgroundColor: "#E53E3E" }} />
      <Box style={{ height: 80, width: 80, backgroundColor: "#613737" }} />
      <Box style={{ height: 80, width: 80, backgroundColor: "#b8b2b2" }} />
      <Text className="text-center">New Travel Form</Text>
    </VStack>
  );
};

export default NewTravelForm;
