import { HStack, Text, VStack } from "native-base";
import { Footer, Header, Screen, TopScreen } from "../components";
import PetVaccinesBox from "../components/PetVaccinesBox";

export default function PetVaccine({ navigation, route }) {
  const { item } = route.params;
  console.log(
    "%cMyProject%cline:5%citem",
    "color:#fff;background:#ee6f57;padding:3px;border-radius:2px",
    "color:#fff;background:#1f3c88;padding:3px;border-radius:2px",
    "color:#fff;background:rgb(179, 214, 110);padding:3px;border-radius:2px",
    item
  );
  return (
    <Screen>
      <TopScreen />
      <Header
        title="Vacinas"
        description="Carteira de vacina do seu pet"
      />
      <VStack space={5}>
        {item.vaccines.map((item, index) => (
          <PetVaccinesBox
            name={item.name}
            date={item.date}
          />
        ))}
      </VStack>

      <Footer
        btnC
        textC={"Adicionar"}
        onPressC={() => navigation.navigate("PetVaccineAdd")}
      />
    </Screen>
  );
}
