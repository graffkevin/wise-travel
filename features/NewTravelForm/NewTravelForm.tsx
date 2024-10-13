import axios from "axios";
import { useState, useEffect } from "react";
import Stack from "@/components/Layouts/Stack";
import { View } from "react-native";
import Card from "@/components/Layouts/Card";
import Typography from "@/components/DataDisplay/Typography";

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
    <Stack direction="column" spacing={10} style={{ paddingTop: 30 }}>
      <Typography>Item 1</Typography>
      <Typography>Item 2</Typography>
      <Card>
        <View style={{ marginBottom: 10 }}>
          <Typography variant="h2">{"subtitle"}</Typography>
          <Typography>{"content"}</Typography>
        </View>
      </Card>
    </Stack>
  );
};

export default NewTravelForm;
