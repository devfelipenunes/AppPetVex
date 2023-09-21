import { HStack, Image, Pressable, Text, VStack } from "native-base";
import PetSexBtn from "./PetSexBtn";

import PetF from "../../assets/pet/petFeminino.png";
import PetM from "../../assets/pet/petMasculino.png";
import { GestureResponderEvent } from "react-native";

interface Props {
  setSex: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export default function PetSex({ setSex }: Props) {
  const sex = [
    { img: PetF, sex: "F", onPress: () => console.log("PetSexBtn") },
    { img: PetM, sex: "M", onPress: () => console.log("PetSexBtn") },
  ];

  function handleSex(sex: string): void {
    setSex(sex);
  }

  return (
    <VStack>
      <Text>Sexo</Text>
      <HStack
        justifyContent={"space-between"}
        px={10}
        py={5}
      >
        {sex.map((item, index) => (
          <Pressable
            bg={"blue.400"}
            h={100}
            w={100}
            justifyItems={"center"}
            alignItems={"center"}
            borderRadius={50}
            onPress={() => handleSex(item.sex)}
          >
            <Image
              h={"50%"}
              w={"40%"}
              bg={"red.400"}
              resizeMode="contain"
              source={item.img}
            />
          </Pressable>
        ))}
      </HStack>
    </VStack>
  );
}
