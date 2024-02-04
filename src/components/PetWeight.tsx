import { useNavigation } from "@react-navigation/native";
import { HStack, Pressable, Text, VStack } from "native-base";

export default function PetWeight({ id, weight }) {
  const { navigate } = useNavigation();

  return (
    <VStack
      mt={5}
      space={5}
    >
      <VStack>
        <HStack
          bg="gray.400"
          justifyContent={"space-between"}
          alignItems={"center"}
          pl={5}
        >
          <Text
            color={"white"}
            fontSize={"2xl"}
          >
            Pesos
          </Text>
          <Pressable
            w={10}
            h={10}
            bg={"gray.600"}
            justifyContent={"center"}
            alignItems={"center"}
            onPress={() => navigate({ name: "PetWeight", params: { id } })}
          >
            <Text
              fontSize={"2xl"}
              color={"white"}
            >
              +
            </Text>
          </Pressable>
        </HStack>

        <VStack bg={"gray.300"}>
          {weight?.map((item, index) => (
            <HStack
              justifyContent={"space-between"}
              alignItems={"center"}
              py={2}
              px={5}
              key={index}
            >
              <Text>Peso: {item.weight}</Text>
              <Text>Data: {item.date_added}</Text>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </VStack>
  );
}
