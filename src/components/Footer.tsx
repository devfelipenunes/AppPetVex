import React from "react";
import { Box, HStack, Pressable, Text, View } from "native-base";

import { FontAwesome5 } from "@expo/vector-icons";

type Props = {
  btnL: boolean;
  btnR: boolean;
  btnC: boolean;
  textC: string;
  onPressL: () => void;
  onPressR: () => void;
  onPressC: () => void;
};

export default function Footer({
  btnL,
  btnC,
  btnR,
  textC,
  onPressL,
  onPressR,
  onPressC,
}: Props) {
  return (
    <HStack
      flex={1}
      px={30}
      position={"absolute"}
      bottom={"10px"}
      left={"0px"}
      right={"0px"}
      pb={"20px"}
      justifyContent={"space-between"}
    >
      {btnL ? (
        <Pressable
          onPress={onPressL}
          w={50}
          h={50}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <FontAwesome5
            name="user-alt"
            size={35}
            color="black"
          />
        </Pressable>
      ) : (
        <Box></Box>
      )}
      {btnC ? (
        <Pressable
          onPress={onPressC}
          w={"100%"}
          h={50}
          bg={"blue.500"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text fontSize={30}>{textC}</Text>
        </Pressable>
      ) : (
        <Box></Box>
      )}
      {btnR ? (
        <Pressable
          onPress={onPressR}
          w={50}
          h={50}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <FontAwesome5
            name="arrow-circle-right"
            size={35}
            color="black"
          />
        </Pressable>
      ) : (
        <Box></Box>
      )}
    </HStack>
  );
}
