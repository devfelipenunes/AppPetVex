import { HStack, Text } from "native-base";

export default function PetVaccinesBox({ name, date }) {
  return (
    <HStack
      bg="blue.400"
      px={4}
      py={2}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Text>{name}</Text>
      <Text>{date}</Text>
    </HStack>
  );
}
