import { Box, Pressable, Text } from "native-base";
import { Footer, Header, Input, Screen, TopScreen } from "../components";
import PetRace from "../components/PetRace";
import { useEffect, useState } from "react";

export default function PetStepTwo({ navigation, route }) {
  const { name, sex } = route.params;

  const [raca, setRaca] = useState();

  useEffect(() => {
    console.log(sex, name);
  }, []);

  function goStepThree() {
    navigation.navigate("PetStepThree", { sex, name, raca });
  }

  return (
    <Screen paddingX="0">
      <Box px={30}>
        <TopScreen />
        <Header
          title="Informações da Raça do Pet"
          description="Excelente!
                Agora, precisamos de mais detalhes
                sobre o seu pet. Por favor, 
                informe a raça do seu querido companheiro:
                "
        />
      </Box>
      <Input
        text={"Raça"}
        value={raca}
        onChangeText={(text) => setRaca(text)}
      />
      {/* <PetRace /> */}
      <Footer
        btnR
        onPressR={goStepThree}
      />
    </Screen>
  );
}
