import { Text, VStack } from "native-base";
import { Footer, Header, Input, Screen, TopScreen } from "../components";

export default function PetSettings() {
  return (
    <Screen>
      <TopScreen />
      <Header
        title="Configurações do Pet"
        description="Preencha os dados do seu pet"
      />
      <VStack space={5}>
        <Input text={"Nome"} />
        <Input text={"Espécie"} />
        <Input text={"Raça"} />
        <Input text={"Microchip"} />
        <Input text={"Data de Aplicação do Microchip"} />
        <Input text={"Sexo"} />
        <Input text={"Peso"} />
        <Input text={"Cor da Pelagem"} />
        <Input text={"Idade"} />
      </VStack>
      <Footer btnC />
    </Screen>
  );
}
