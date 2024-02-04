import { Button, HStack, Pressable, Text, VStack } from "native-base";
import Main from "../components/Main";
import { useEffect, useState } from "react";
import * as SQLite from "expo-sqlite";
import { Screen } from "../components";
import PetWeight from "../components/PetWeight";

export default function Pet({ navigation, route }) {
  const [weight, setWeight] = useState();
  const [vaccine, setVaccine] = useState();
  const [loading, setLoading] = useState(true);
  const db = SQLite.openDatabase("database.db");

  const { id, name, birthDate, coatColor, race, sex, species } = route.params;

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS weight_records (id INTEGER PRIMARY KEY AUTOINCREMENT, pet_id INTEGER, weight TEXT, date_added TEXT, FOREIGN KEY (pet_id) REFERENCES pets (id))"
      );
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS vaccine_records (id INTEGER PRIMARY KEY AUTOINCREMENT, pet_id INTEGER, vaccine TEXT, date_added TEXT, FOREIGN KEY (pet_id) REFERENCES pets (id))"
      );
      tx.executeSql(
        "SELECT * FROM weight_records WHERE pet_id = ?",
        [id],
        (txObj, resultSet) => {
          const weights = resultSet.rows._array;
          setWeight(weights);
          setLoading(false);
        },
        (txObj, error) => {
          console.log(error);
          onError(error);
        }
      );
      tx.executeSql(
        "SELECT * FROM vaccine_records WHERE pet_id = ?",
        [id],
        (txObj, resultSet) => {
          const vaccine = resultSet.rows._array;
          setVaccine(vaccine);
        },
        (txObj, error) => {
          console.log(error);
          onError(error);
        }
      );
    });
  }, [db]);

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
        Pet
      </Text>
      <VStack>
        <Text>Nome: {name}</Text>
        <Text>Nascimento: {birthDate}</Text>
      </VStack>
      <PetWeight
        id={id}
        weight={weight}
      />
      <HStack
        mt={5}
        bg="gray.400"
        justifyContent={"space-between"}
        alignItems={"center"}
        pl={5}
      >
        <Text
          color={"white"}
          fontSize={"2xl"}
        >
          Vacinas
        </Text>
        <Pressable
          w={10}
          h={10}
          bg={"gray.600"}
          justifyContent={"center"}
          alignItems={"center"}
          onPress={() =>
            navigation.navigate({ name: "PetVaccine", params: { id } })
          }
        >
          <Text
            fontSize={"2xl"}
            color={"white"}
          >
            +
          </Text>
        </Pressable>
      </HStack>
      <VStack bg={"gray.300"}>
        {vaccine?.map((item, index) => (
          <HStack
            justifyContent={"space-between"}
            alignItems={"center"}
            py={2}
            px={5}
            key={index}
          >
            <Text>Nome: {item.vaccine}</Text>
            <Text>Data: {item.date_added}</Text>
          </HStack>
        ))}
      </VStack>
    </Screen>
  );
}
