import { useEffect } from "react";
import { Footer, Header, Screen, TopScreen } from "../components";
import PetPhoto from "../components/PetPhoto";

export default function PetStepThree({ navigation, route }) {
  const { name, sex, raca } = route.params;

  useEffect(() => {
    console.log(name, sex, raca);
  }, []);

  function goHome() {
    navigation.navigate("AppRoutes", {
      screen: "Home",
    });
  }
  return (
    <Screen>
      <TopScreen />
      <Header
        title="Informações da Raça do Pet"
        description="Agora, vamos adicionar um toque pessoal   ao perfil do seu pet. Adicione uma foto adorável para que possamos identificá-lo facilmente:"
      />

      <PetPhoto />

      <Footer
        btnR
        onPressR={goHome}
      />
    </Screen>
  );
}
