import { Box, FlatList, Image, Pressable, Text } from "native-base";
import { Footer, Header, Input, Screen, TopScreen } from "../components";

import { useEffect, useState } from "react";
import axios from "axios";
import { ActivityIndicator } from "react-native";

export default function PetStepTwo({ navigation, route }) {
  const { name, sex } = route.params;

  const [loading, setLoading] = useState<boolean>();
  const [breeds, setBreeds] = useState([]);
  const [pet, setPet] = useState<string>();
  const [searchText, setSearchText] = useState("");
  const [filteredBreeds, setFilteredBreeds] = useState([]);

  useEffect(() => {
    console.log(name, sex);
  }, [name, sex]);

  useEffect(() => {
    const filtered = breeds.filter((breed) =>
      breed.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredBreeds(filtered);
  }, [searchText, breeds]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://api.thedogapi.com/v1/breeds`, {
        headers: {
          "x-api-key":
            "live_jLnnMu6YZcFtG0aGmRIXsrZw2F7YpkoB9PmDDcTty8vjKNn2ReldORa6mH87x1QH",
        },
      })
      .then((response) => {
        console.log("Informações da raça de cachorro:");
        setBreeds(response.data);
        setFilteredBreeds(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Ocorreu um erro ao buscar informações da raça:", error);
        setLoading(false);
      });
  }, []);

  function goStepThree(item) {
    setPet(item);
    console.log("item", pet);
    navigation.navigate("PetStepThree", { sex, name, pet });
  }

  return (
    <Screen>
      <Box>
        <TopScreen />
        <Header
          title="Informações da Raça do Pet"
          description="Excelente! Agora, precisamos de mais detalhes sobre o seu pet. Por favor, informe a raça do seu querido companheiro: "
        />
      </Box>
      <Input
        text={"Raça"}
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={filteredBreeds}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          renderItem={({ item }) => (
            <Pressable
              w={200}
              h={200}
              onPress={() => goStepThree(item)}
            >
              <Image
                alt="dog"
                source={{ uri: item.image.url }}
                style={{ width: 200, height: 200 }}
              />
            </Pressable>
          )}
        />
      )}
      <Footer
        btnR
        onPressR={goStepThree}
      />
    </Screen>
  );
}
