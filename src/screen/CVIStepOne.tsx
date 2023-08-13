import { Box, Pressable, Text, VStack } from "native-base";
import { Footer, Header, Screen, TopScreen } from "../components";

export default function CVIStepOne({ navigation }) {
  const data = [
    {
      name: "Fred",
    },
    {
      name: "Bob",
    },
  ];

  return (
    <Screen>
      <TopScreen />
      <Header
        title="Selecione o Pet para o Certificado Veterinário Internacional"
        description="Hora de preparar o Certificado Veterinário Internacional para a aventura do seu pet! Escolha um dos pets cadastrados
        abaixo para começar:"
      />
      <VStack space={5}>
        {data.map((item) => (
          <Pressable
            width={"100%"}
            h={50}
            justifyContent={"center"}
            alignItems={"center"}
            bg={"blue.500"}
            onPress={() =>
              navigation.navigate( "CVIStepTwo")
            }
          >
            <Text>{item.name}</Text>
          </Pressable>
        ))}
      </VStack>
    </Screen>
  );
}
