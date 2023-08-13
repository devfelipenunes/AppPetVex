import { Text, VStack } from "native-base";
import { Footer, Header, Input, Screen, TopScreen } from "../components";

export default function PetOwner() {
  return (
    <Screen>
      <TopScreen />
      <Header title={"Dono do Pet"} description="Preencha suas informações" />
      <VStack space={5}>
        <Input text={"Nome"} />
        <Input text={"CPF"} />
        <Input text={"Telefone"} />
        <Input text={"Endereço"} />
        <Input text={"Cidade"} />
      </VStack>

      <Footer btnC textC={"Salvar"} />
    </Screen>
  );
}
