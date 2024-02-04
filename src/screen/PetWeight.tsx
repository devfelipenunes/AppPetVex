import * as SQLite from "expo-sqlite";
import { Button, HStack, Pressable, Text, VStack } from "native-base";
import { Input, Screen } from "../components";
import { useEffect, useState } from "react";

export default function PetWeight({ route, navigation }) {
  const db = SQLite.openDatabase("database.db");
  const { id } = route.params;
  const [weight, setWeight] = useState();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const addWeight = (petId, weight) => {
    const dateAdded = new Date().toLocaleDateString("pt-BR"); // opcional, dependendo se você quer rastrear a data de adição

    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO weight_records (pet_id, weight, date_added) VALUES (?, ?, ?)",
        [petId, weight, dateAdded],
        (txObj, resultSet) => {
          console.log("Peso adicionado com sucesso!");
          navigation.goBack();
        },
        (txObj, error) => console.log(error)
      );
    });
  };

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM weight_records WHERE pet_id = ?",
        [id],
        (txObj, resultSet) => {
          setLoading(false);
          const weights = resultSet.rows._array;
          setData(weights);
        },
        (txObj, error) => {
          console.log(error);
          onError(error);
        }
      );
    });
  }, []);

  if (loading)
    return (
      <Text
        textAlign={"center"}
        my={20}
      >
        Carregando...
      </Text>
    );

  return (
    <Screen>
      <Text
        bold
        fontSize={"lg"}
        textAlign={"center"}
        my={5}
      >
        Peso
      </Text>
      <VStack bg={"gray.600"}>
        <Text>Ultimos Pesos</Text>
        {data?.map((item, index) => (
          <HStack
            justifyContent={"space-between"}
            key={index}
            bg="gray.300"
          >
            <HStack
              pl={5}
              justifyContent={"space-between"}
              alignContent={"center"}
            >
              <Text>Peso: {item.weight}</Text>
              <Text>Data: {item.date_added}</Text>
            </HStack>
            <Pressable
              w={10}
              h={10}
              bg={"gray.500"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text
                fontSize={"2xl"}
                color={"white"}
              >
                -
              </Text>
            </Pressable>
          </HStack>
        ))}
      </VStack>

      <Input
        text="Adicione um novo peso"
        value={weight}
        onChangeText={(text) => setWeight(text)}
      />

      <Button
        position={"absolute"}
        alignSelf={"center"}
        bottom={"5%"}
        onPress={() => addWeight(id, weight)}
      >
        Adicionar
      </Button>
    </Screen>
  );
}
