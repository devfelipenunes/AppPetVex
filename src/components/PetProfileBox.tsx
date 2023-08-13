import { Box, Text } from "native-base";

export default function PetProfileBox({ children, category, item }) {
  return (
    <Box
      bg={"blue.400"}
      w={"30%"}
      h={100}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Text fontSize={20}>{item}</Text>
      <Text fontSize={15}>{category}</Text>
    </Box>
  );
}
