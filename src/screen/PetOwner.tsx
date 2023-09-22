import { Pressable, Text, VStack } from "native-base";
import { Footer, Header, Input, Screen, TopScreen } from "../components";
import { Controller, useForm } from "react-hook-form";
import { petOwnerSchema } from "../utils/petSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import Main from "../components/Main";

export default function PetOwner() {
  const {
    control,
    handleSubmit,
    formState: {
      errors: { name, cpf, telefone, endereco, cidade },
    },
  } = useForm({
    resolver: yupResolver(petOwnerSchema),
  });

  const onSubmit = async (data) => {
    console.log(
      "%cMyProject%cline:33%cdata",
      "color:#fff;background:#ee6f57;padding:3px;border-radius:2px",
      "color:#fff;background:#1f3c88;padding:3px;border-radius:2px",
      "color:#fff;background:rgb(118, 77, 57);padding:3px;border-radius:2px",
      data
    );
  };

  return (
    <Screen>
      <TopScreen />
      <Header
        title={"Dono do Pet"}
        description="Preencha suas informações"
      />

      <Main>
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
              text={"CPF"}
              onChangeText={onChange}
              value={value}
              error={cpf?.message}
            />
          )}
          name="cpf"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              text={"Telefone"}
              onChangeText={onChange}
              value={value}
              error={telefone?.message}
            />
          )}
          name="telefone"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              text={"Endereço"}
              onChangeText={onChange}
              value={value}
              error={endereco?.message}
            />
          )}
          name="endereco"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              text={"Data de Aplicação do Microchip"}
              onChangeText={onChange}
              value={value}
              error={cidade?.message}
            />
          )}
          name="cidade"
        />
        <Pressable onPress={handleSubmit(onSubmit)}>
          <Text>salvar</Text>
        </Pressable>
      </Main>
    </Screen>
  );
}
