import { Button, HStack, Text, VStack } from "native-base";
import { Footer, Header, Input, Screen, TopScreen } from "../components";
import PetVaccinesBox from "../components/PetVaccinesBox";
import * as SQLite from "expo-sqlite";
import { useState } from "react";

export default function PetVaccine({ navigation, route }) {
  const { id } = route.params;
  const db = SQLite.openDatabase("database.db");
  const { item } = route.params;
  const [vaccine, setVaccine] = useState();

  const addVaccine = (petId, vaccine) => {
    const dateAdded = new Date().toLocaleDateString("pt-BR"); // opcional, dependendo se você quer rastrear a data de adição

    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO vaccine_records (pet_id, vaccine, date_added) VALUES (?, ?, ?)",
        [petId, vaccine, dateAdded],
        (txObj, resultSet) => {
          console.log("Vacina adicionado com sucesso!");
          navigation.goBack();
        },
        (txObj, error) => console.log(error)
      );
    });
  };

  {
    /*
      TODO: Adicionar lembrete de vacinas ou medicamento 
    */
  }

  return (
    <Screen>
      <Text>Ultimas vacinas</Text>

      <Input
        value={vaccine}
        onChangeText={(text) => setVaccine(text)}
      />

      <Button onPress={() => addVaccine(id, vaccine)}>Adicionar</Button>
    </Screen>
  );
}
