import { Button, Pressable, Text, VStack } from "native-base";
import { useEffect, useState } from "react";
import * as SQLite from "expo-sqlite";
import { Screen } from "../components";

export default function Pets({ navigation }) {
  const db = SQLite.openDatabase("database.db");
  const [data, setData] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS pets (id INTEGER PRIMARY KEY AUTOINCREMENT, name Text, birthDate Text, coatColor Text, microchip Text, microchipDate Text, race Text, sex Text, species Text, weight Text)"
      );
    });

    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM pets",
        null,
        (txObj, resultSet) => setData(resultSet.rows._array),
        (txObj, error) => console.log(error)
      );
    });
  }, [db]);

  return (
    <Screen>
      <Text
        bold
        fontSize={"lg"}
        textAlign={"center"}
        my={5}
      >
        Pets
      </Text>

      <VStack>
        <Text
          fontSize={16}
          mb={2}
        >
          Meus Pets
        </Text>
        {data.map((item, index) => (
          <Pressable
            py={3}
            px={5}
            bg={"gray.300"}
            onPress={() => navigation.navigate({ name: "Pet", params: item })}
            key={index}
          >
            <Text>Nome: {item.name}</Text>
          </Pressable>
        ))}
      </VStack>

      <Button
        position={"absolute"}
        alignSelf={"center"}
        bottom={"5%"}
        onPress={() => navigation.navigate("AddPets")}
      >
        Adicionar Pet
      </Button>
    </Screen>
  );
}
