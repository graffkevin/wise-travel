import axios from "axios";
import { useState, useEffect } from "react";
import { Text } from "react-native";
import Stack from "@/components/Layouts/Stack";

interface Recipe {
  recipe_name: string;
  description: string;
  ingredients: string;
  instructions: string;
}

const NewTravelForm = () => {
  const [data, setData] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:3000/data")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données:", error);
        setLoading(false);
      });
  }, []);

  return (
    // <VStack space="lg" style={{ alignItems: "center" }}>
    //   {data.map((recipe) => (
    //     <HStack key={recipe.recipe_name} space="lg">
    //       <Box style={{ height: 80, width: 80, backgroundColor: "#b8b2b2" }} />
    //       <Text>{recipe.recipe_name}</Text>
    //     </HStack>
    //   ))}
    // </VStack>
    <Stack direction="column" spacing={10}>
      <Text>Item 1</Text>
      <Text>Item 2</Text>
      {/*<Button title="Click Me" />*/}
    </Stack>
  );
};

export default NewTravelForm;
