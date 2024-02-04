import { Button, Text, VStack } from "native-base";
import { Controller, useForm } from "react-hook-form";
import { petSchema } from "../utils/petSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input, Screen } from "../components";
import * as SQLite from "expo-sqlite";
import Main from "../components/Main";

type FormData = {
  name: string;
  birthDate: string;
  coatColor: string;
  microchip: string;
  microchipDate: string;
  race: string;
  sex: string;
  species: string;
  weight: string;
};

export default function AddPets({ navigation }) {
  const db = SQLite.openDatabase("database.db");

  const {
    control,
    handleSubmit,
    formState: {
      errors: { name, birthDate, coatColor, race, sex, species, weight },
    },
  } = useForm({
    resolver: yupResolver(petSchema),
  });

  const onSubmit = async (data: FormData) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO pets (name, birthDate, coatColor, microchip, microchipDate, race, sex, species, weight) values (?,?,?,?,?,?,?,?,?)",
        [
          data.name,
          data.birthDate,
          data.coatColor,
          data.race,
          data.sex,
          data.species,
          data.weight,
        ],
        (txObj, resultSet) => {
          navigation.goBack();
        },
        (txObj, error) => console.log(error)
      );
    });
  };

  return (
    <Screen>
      <Text
        mt={10}
        textAlign={"center"}
      >
        Adicione seu pet{" "}
      </Text>
      <Main>
        <VStack
          mt={5}
          space={5}
        >
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
          my={"20px"}
          onPress={handleSubmit(onSubmit)}
        >
          Salvar
        </Button>
      </Main>
    </Screen>
  );
}
