import { Pressable, Text, VStack } from "native-base";
import { Footer, Header, Input, Screen, TopScreen } from "../components";
import { vet } from "../utils/petSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import Main from "../components/Main";

export default function Vet() {
  const {
    control,
    handleSubmit,
    formState: {
      errors: { name, cidade, crm, email, endereco, telefone },
    },
  } = useForm({
    resolver: yupResolver(vet),
  });

  const onSubmit = async (data) => {
    console.log("data", data);
  };

  return (
    <Screen>
      <TopScreen />
      <Header title="Confirme dados para o Certificado Veterinário Internacional" />

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
              text={"CRM"}
              onChangeText={onChange}
              value={value}
              error={crm?.message}
            />
          )}
          name="crm"
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
              text={"Cidade"}
              onChangeText={onChange}
              value={value}
              error={cidade?.message}
            />
          )}
          name="cidade"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              text={"email"}
              onChangeText={onChange}
              value={value}
              error={email?.message}
            />
          )}
          name="email"
        />

        <Pressable onPress={handleSubmit(onSubmit)}>
          <Text>salvar</Text>
        </Pressable>
      </Main>
      <Footer
        btnC
        textC={"Salvar"}
      />
    </Screen>
  );
}
