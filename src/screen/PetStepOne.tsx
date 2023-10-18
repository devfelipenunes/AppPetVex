import { useEffect, useState } from "react";
import {
  Footer,
  Header,
  Input,
  PetSex,
  Screen,
  TopScreen,
} from "../components";

export default function PetStepOne({ navigation }) {
  const [sex, setSex] = useState<string>();
  const [name, SetName] = useState<string>();

  async function handle() {
    navigation.navigate("PetStepTwo", { sex, name });
  }

  return (
    <Screen>
      <TopScreen />
      <Header
        title="Cadastre seu Primeiro Pet"
        description="Bem-vindo ao PetVax! Para começar, precisamos conhecer o seu pet. Por favor, preencha as informações abaixo:"
      />

      <Input
        text={"Nome"}
        value={name}
        onChangeText={(text) => SetName(text)}
      />
      <PetSex
        sex={sex}
        setSex={setSex}
      />

      <Footer
        btnR
        onPressR={handle}
      />
    </Screen>
  );
}
