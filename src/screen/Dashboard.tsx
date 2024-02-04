import { useNavigation } from "@react-navigation/native";
import { Box, HStack, Pressable, Text, VStack } from "native-base";
import { Screen } from "../components";

export default function Dashboard({ navigation }) {
  return (
    <Screen>
      <Text
        textAlign={"center"}
        fontSize={"lg"}
        my={5}
      >
        Dashboard
      </Text>
      <VStack space={10}>
        <HStack justifyContent={"space-between"}>
          <Pressable
            onPress={() => navigation.navigate("Pets")}
            w={"45%"}
            h={100}
            bg={"gray.300"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text>Pets</Text>
          </Pressable>
          <Pressable
            onPress={() => console.log("Pets")}
            w={"45%"}
            h={100}
            bg={"gray.300"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text>Em Breve</Text>
          </Pressable>
        </HStack>

        <HStack justifyContent={"space-between"}>
          <Pressable
            onPress={() => console.log("Pets")}
            w={"45%"}
            h={100}
            bg={"gray.300"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text>Em breve</Text>
          </Pressable>
          <Pressable
            onPress={() => console.log("Pets")}
            w={"45%"}
            h={100}
            bg={"gray.300"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text>Em Breve</Text>
          </Pressable>
        </HStack>
      </VStack>
    </Screen>
  );
}
