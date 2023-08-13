import React from "react";
import { Box, HStack, Pressable, Text, View } from "native-base";

type Props = {
  children: React.ReactNode;
};

export default function Footer({
  children,
  onPress,
  btnL,
  btnC,
  btnR,
  textC,
  onPressL,
  onPressR,
  onPressC,
}) {
  return (
    <HStack
      flex={1}
      px={"30px"}
      position={"absolute"}
      bottom={"10px"}
      left={"0px"}
      right={"0px"}
      justifyContent={"space-between"}
    >
      {btnL ? (
        <Pressable
          onPress={onPressL}
          w={50}
          h={50}
          bg={"red.500"}
        ></Pressable>
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
          bg={"red.500"}
        ></Pressable>
      ) : (
        <Box></Box>
      )}
    </HStack>
  );
}
