import { Text, VStack } from "native-base";
import { Footer, Header, Input, Screen, TopScreen } from "../components";

export default function PetVaccineAdd({ navigation }) {
  return (
    <Screen>
      <TopScreen />
      <Header
        title="Vacinas"
        description="Adiciona uma nova vacina"
      />

      <VStack space={5}>
        <Input text={"Nome da vacina"} />
        <Input text={"Data da vacina"} />
        <Input text={"Laboratorio"} />
        <Input text={"Nome comercial"} />
        <Input text={"Principios ativos"} />
      </VStack>

      <Footer
        btnC
        textC={"Salvar"}
        onPressC={() => console.log("salvar")}
      />
    </Screen>
  );
}
