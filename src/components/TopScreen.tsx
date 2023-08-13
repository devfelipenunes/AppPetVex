import { Box, Image, Pressable, Text, View } from "native-base";
import { IViewProps } from "native-base/lib/typescript/components/basic/View/types";
import { useNavigation } from "@react-navigation/native";

import { FontAwesome5 } from "@expo/vector-icons";

type Props = IViewProps & {
  btnNotification?: boolean;
  btnBack?: boolean;
  showImage?: boolean;
  mb?: string;
  px?: string;
};

export default function TopScreen({
  btnNotification = false,
  btnBack = true,
  showImage = true,
  mb = "30px",
  px = "0px",
  ...rest
}: Props) {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View
      flexDirection={"row"}
      px={px}
      pt={30}
      w={"100%"}
      h={"50px"}
      mb={mb}
      alignItems={"center"}
      justifyContent={"space-between"}
      {...rest}
    >
      <Pressable
        onPress={handleBack}
        w={10}
        h={10}
        alignItems={"flex-start"}
        justifyContent={"space-between"}
      >
        {btnBack && (
          <>
            <FontAwesome5
              name="arrow-circle-left"
              size={35}
              color="black"
            />
          </>
        )}
      </Pressable>
      <Pressable
        w="30%"
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        {showImage ? (
          <Image
            size={"40px"}
            alt="Voltar"
          />
        ) : (
          ""
        )}
      </Pressable>
      <Box w="30%">
        <Pressable
          alignItems={"flex-end"}
          onPress={() => console.log("sino")}
        >
          {btnNotification && <Text>Sino</Text>}
        </Pressable>
      </Box>
    </View>
  );
}
