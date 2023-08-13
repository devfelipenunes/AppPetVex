import {
  Footer,
  Header,
  Input,
  PetSex,
  Screen,
  TopScreen,
} from "../components";

export default function PetStepOne({ navigation }) {
  function goStepTwo() {
    navigation.navigate("PetStepTwo");
  }

  return (
    <Screen>
      <TopScreen />
      <Header
        title="Cadastre seu Primeiro Pet"
        description="Bem-vindo ao PetVax! Para começar,
precisamos conhecer o seu pet.
Por favor, preencha as informações abaixo:"
      />

      <Input text={"Nome"} />
      <PetSex />
      <Footer
        btnR
        onPressR={goStepTwo}
      />
    </Screen>
  );
}
