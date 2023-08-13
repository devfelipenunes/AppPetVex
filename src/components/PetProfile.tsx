import { Box, HStack, Image, Pressable, Text, VStack } from "native-base";
import PetProfileBox from "./PetProfileBox";
import { Fontisto } from "@expo/vector-icons";

export default function PetProfile({
  name,
  sex,
  weight,
  age,
  img,
  petSettings,
}) {
  return (
    <VStack>
      <Image
        resizeMode={"stretch"}
        source={img}
        alt={"pet"}
        w={"100%"}
        h={283}
      />
      <HStack
        py={5}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text fontSize={30}>{name}</Text>
        <Pressable
          w={30}
          h={30}
          bg={"blue.400"}
          onPress={petSettings}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Fontisto
            name="player-settings"
            size={24}
            color="black"
          />
        </Pressable>
      </HStack>
      <HStack justifyContent={"space-between"}>
        <PetProfileBox
          category={"sexo"}
          item={sex}
        />

        <PetProfileBox
          category={"peso"}
          item={weight}
        />

        <PetProfileBox
          category={"idade"}
          item={age}
        />
      </HStack>
    </VStack>
  );
}
