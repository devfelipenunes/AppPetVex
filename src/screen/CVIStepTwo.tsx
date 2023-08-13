import { Box, HStack, Pressable, Text, VStack } from "native-base";
import { Footer, Header, Screen, TopScreen } from "../components";

export default function CVIStepTwo({ navigation }) {
  const data = [
    {
      checked: true,
      text: "identificação do pet completa",
      navigation: "PetSettings",
    },
    {
      checked: false,
      text: "identificação do tutor completa",
      navigation: "PetOwner",
    },
    {
      checked: false,
      text: "identificação do vete completa",
      navigation: "Vet",
    },
  ];

  return (
    <Screen>
      <TopScreen />
      <Header
        title="Selecione o Pet para o Certificado Veterinário Internacional"
        description="Antes de prosseguir com a criação do
        Certificado Veterinário Internacional, é 
        importante garantir que todos os requisitos
        sejam atendidos. Preencha as informações
        necessárias abaixo e verifique a validade de
        cada requisito:"
      />
      <VStack space={5}>
        {data.map((item, index) => (
          <Pressable
          onPress={() => navigation.navigate(item.navigation)}
          >
            <HStack
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box
                w={50}
                h={50}
                bg={item.checked ? "green.600" : "red.500"}
              />

              <Text>identificação do pet completa</Text>
            </HStack>
          </Pressable>
        ))}
      </VStack>
    </Screen>
  );
}
