import { Pressable, Text, VStack } from "native-base";
import { Footer, Header, Input, Screen, TopScreen } from "../components";
import { vaccine } from "../utils/petSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import Main from "../components/Main";

export default function PetVaccineAdd({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: {
      errors: { name, date, lab, comercialName, activos },
    },
  } = useForm({
    resolver: yupResolver(vaccine),
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
        title="Vacinas"
        description="Adiciona uma nova vacina"
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
              text={"Data"}
              onChangeText={onChange}
              value={value}
              error={date?.message}
            />
          )}
          name="date"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              text={"Laboratorio"}
              onChangeText={onChange}
              value={value}
              error={lab?.message}
            />
          )}
          name="lab"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              text={"Nome Comercial"}
              onChangeText={onChange}
              value={value}
              error={comercialName?.message}
            />
          )}
          name="comercialName"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              text={"Ativos"}
              onChangeText={onChange}
              value={value}
              error={activos?.message}
            />
          )}
          name="activos"
        />
        <Pressable onPress={handleSubmit(onSubmit)}>
          <Text>salvar</Text>
        </Pressable>
      </Main>

      <Footer
        btnC
        textC={"Salvar"}
        onPressC={() => console.log("salvar")}
      />
    </Screen>
  );
}
