import { Button, Pressable, Text, VStack } from "native-base";
import { Footer, Header, Input, Screen, TopScreen } from "../components";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { petSchema } from "../utils/petSchema";
import { useState } from "react";
import Main from "../components/Main";
import api from "../services/api";

export default function PetSettings() {
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

  const onSubmit = async (data) => {
    console.log(
      "%cMyProject%cline:33%cdata",
      "color:#fff;background:#ee6f57;padding:3px;border-radius:2px",
      "color:#fff;background:#1f3c88;padding:3px;border-radius:2px",
      "color:#fff;background:rgb(118, 77, 57);padding:3px;border-radius:2px",
      data
    );

    api
      .post("/pets", {
        name: data.name,
        species: data.species,
        race: data.race,
        microchip: data.microchip,
        microchipDate: data.microchipDate,
        sex: data.sex,
        weight: data.weight,
        coatColor: data.coatColor,
        birthDate: data.birthDate,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => console.error(e.response));
  };

  return (
    <Screen>
      <TopScreen />
      <Header
        title="Configurações do Pet"
        description="Preencha os dados do seu pet"
      />
      <Main>
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
      </Main>
      {/* <Pressable onPress={handleSubmit(onSubmit)}>
        <Text>salvar</Text>
      </Pressable> */}
      <Footer btnC onPressC={handleSubmit(onSubmit)} />
    </Screen>
  );
}
