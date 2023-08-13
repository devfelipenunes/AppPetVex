import { Box, HStack, Image, VStack } from "native-base";
import PetPhotoBtn from "./PetPhotoBtn";

const data = [
  { onPress: () => console.log("tirar foto") },
  { onPress: () => console.log("escolher foto") },
];

export default function PetPhoto() {
  return (
    <VStack w={"100%"}>
      <Image
        w={"100%"}
        h={300}
        bg={"red.400"}
      />

      <HStack
        mt={5}
        justifyContent={"space-between"}
      >
        {data.map((item, index) => (
          <PetPhotoBtn onPress={item.onPress} />
        ))}
      </HStack>
    </VStack>
  );
}
