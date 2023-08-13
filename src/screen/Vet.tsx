import { VStack } from "native-base";
import { Footer, Header, Input, Screen, TopScreen } from "../components";

export default function Vet() {
  return (
    <Screen>
      <TopScreen />
      <Header title="Confirme dados para o Certificado Veterinário Internacional" />

      <VStack 
      pb={20}
      space={5}>
        <Input text={"Nome completo"} />
        <Input text={"CRM"} />
        <Input text={"Endereço"} />
        <Input text={"Telefone"} />
        <Input text={"Celular"} />
        <Input text={"Cidade"} />
        <Input text={"E-mail"} />
      </VStack>
      <Footer btnC textC={"Salvar"} />
    </Screen>
  );
}
