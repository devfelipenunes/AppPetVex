import { Text, VStack } from "native-base";
import { Footer, Header, Input, Screen, TopScreen } from "../components";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { petSchema } from "../utils/petSchema";
import { useState } from "react";
import Main from "../components/Main";

export default function PetSettings() {
  const [pet, setPet] = useState();

  const {
    control,
    handleSubmit,
    formState: {
      errors: {},
    },
  } = useForm({
    resolver: yupResolver(petSchema),
  });

  const onSubmit = data => console.log(data);


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
              <Input text={"Nome"} onChange={onChange} value={value} />
            )}
            name="name"
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input text={"Espécie"} onChange={onChange} value={value} />
            )}
            name="species"
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input text={"Raça"} onChange={onChange} value={value} />
            )}
            name="race"
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input text={"microchip"} onChange={onChange} value={value} />
            )}
            name="microchip"
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                text={"Data de Aplicação do Microchip"}
                onChange={onChange}
                value={value}
              />
            )}
            name="microchipDate"
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input text={"Sexo"} onChange={onChange} value={value} />
            )}
            name="sex"
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input text={"Peso"} onChange={onChange} value={value} />
            )}
            name="weight"
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                text={"Cor da Pelagem"}
                onChange={onChange}
                value={value}
              />
            )}
            name="coatColor"
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input text={"Idade"} onChange={onChange} value={value} />
            )}
            name="birthdate"
          />
        </VStack>
      </Main>

      <Footer btnC onPressC={handleSubmit(onSubmit)} />
    </Screen>
  );
}
