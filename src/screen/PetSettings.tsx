import { Button, Pressable, Text, VStack } from "native-base";
import { Footer, Header, Input, Screen, TopScreen } from "../components";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { petSchema } from "../utils/petSchema";
import { useEffect, useState } from "react";
import Main from "../components/Main";

export default function PetSettings() {
  const db = SQLite.openDatabase("database.db");
  const [pet, setPet] = useState();

  const {
    control,
    handleSubmit,
    formState: {
      errors: {
        name,
        birthDate,
        coatColor,
        microchip,
        microchipDate,
        race,
        sex,
        species,
        weight,
      },
    },
  } = useForm({
    resolver: yupResolver(petSchema),
  });

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS pets (id INTEGER PRIMARY KEY AUTOINCREMENT, name Text, bithDate Text, coatColor Text, microchip Text, microchipDate Text, race Text, sex Text, species Text, weight Text)"
      );
    });
  }, [db]);

  const onSubmit = async (data) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO pets (name, birthDate, coatColor, microchip, microchipDate, race, sex, species, weight) values (?,?,?,?)",
        [],
        (txObj, resultSet) => {
          console.log("txObj", txObj);
          console.log("resultSet", resultSet);
        },
        (txObj, error) => console.log(error)
      );
    });
  };

  return (
    <Screen>
      <TopScreen />
      <Main>
        <Header
          title="Configurações do Pet"
          description="Preencha os dados do seu pet"
        />
        <VStack space={5}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                text={"Nome"}
                onChangeText={onChange}
                value={value}
                error={name?.message}
              />
            )}
            name="name"
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                text={"Espécie"}
                onChangeText={onChange}
                value={value}
                error={species?.message}
              />
            )}
            name="species"
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                text={"Raça"}
                onChangeText={onChange}
                value={value}
                error={race?.message}
              />
            )}
            name="race"
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                text={"microchip"}
                onChangeText={onChange}
                value={value}
                error={microchip?.message}
              />
            )}
            name="microchip"
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                text={"Data de Aplicação do Microchip"}
                onChangeText={onChange}
                value={value}
                error={microchipDate?.message}
              />
            )}
            name="microchipDate"
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                text={"Sexo"}
                onChangeText={onChange}
                value={value}
                error={sex?.message}
              />
            )}
            name="sex"
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                text={"Peso"}
                onChangeText={onChange}
                value={value}
                error={weight?.message}
              />
            )}
            name="weight"
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                text={"Cor da Pelagem"}
                onChangeText={onChange}
                value={value}
                error={coatColor?.message}
              />
            )}
            name="coatColor"
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                text={"Idade"}
                onChangeText={onChange}
                value={value}
                error={birthDate?.message}
              />
            )}
            name="birthDate"
          />
        </VStack>

        <Button
          mt={"20px"}
          onPress={handleSubmit(onSubmit)}
        >
          Salvar
        </Button>
      </Main>
    </Screen>
  );
}
