import { Footer, Header, Screen, TopScreen } from "../components";
import PetPhoto from "../components/PetPhoto";

export default function PetStepThree({ navigation }) {
  function goHome() {
    navigation.navigate("Home");
  }
  return (
    <Screen>
      <TopScreen />
      <Header
        title="Informações da Raça do Pet"
        description="Agora, vamos adicionar um toque pessoal
                ao perfil do seu pet. Adicione uma foto
                adorável para que possamos identificá-lo
                facilmente:"
      />

      <PetPhoto />

      <Footer
        btnR
        onPressR={goHome}
      />
    </Screen>
  );
}
