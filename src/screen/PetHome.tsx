import { Pressable, Text } from "native-base";
import { Footer, Screen, TopScreen } from "../components";
import PetProfile from "../components/PetProfile";

export default function PetHome({ route, navigation }) {
  const { item } = route.params;

  return (
    <Screen>
      <TopScreen />

      <PetProfile
        name={item.name}
        sex={item.sex}
        age={item.age}
        weight={item.weight}
        img={item.img}
        petSettings={() => navigation.navigate("PetSettings")}
      />
      <Pressable
        mt={5}
        w={"100%"}
        h={50}
        bg={"blue.500"}
        alignItems={"center"}
        justifyContent={"center"}
        onPress={() => {
          navigation.navigate({ name: "PetVaccine", params: { item } });
        }}
      >
        <Text fontSize={20}>Vacinas</Text>
      </Pressable>

      <Footer btnL 
      
      onPressL={() => navigation.navigate("PetOwner")}
      />
    </Screen>
  );
}
