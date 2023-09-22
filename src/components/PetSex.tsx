import {
  HStack,
  Image,
  Pressable,
  Text,
  VStack,
  useSafeArea,
} from "native-base";
import PetF from "../../assets/pet/petFeminino.png";
import PetM from "../../assets/pet/petMasculino.png";
import { useState } from "react";

interface Props {
  setSex: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export default function PetSex({ setSex, sex }: Props) {
  const sexData = [
    { img: PetF, sex: "F" },
    { img: PetM, sex: "M" },
  ];

  function handleSex(sex: string, index): void {
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
        {sexData.map((item, index) => (
          <Pressable
            key={index}
            bg={sex === item.sex ? "blue.400" : "red.500"}
            h={100}
            w={100}
            justifyItems={"center"}
            alignItems={"center"}
            borderRadius={50}
            onPress={() => handleSex(item.sex)}
          >
            <Image
              h={"100%"}
              w={"40%"}
              resizeMode="contain"
              source={item.img}
            />
          </Pressable>
        ))}
      </HStack>
    </VStack>
  );
}
