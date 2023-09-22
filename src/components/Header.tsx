import React from "react";
import { Center, Text, VStack } from "native-base";
import { InterfaceVStackProps } from "native-base/lib/typescript/components/primitives/Stack/VStack";

type Props = InterfaceVStackProps & {
  title: string;
  description: string;
  padding?: string;
  paddingTop?: string;
  marginBottom?: string;
};

export default function Header({
  title,
  description,
  marginBottom = "40px",
  ...rest
}: Props) {
  return (
    <VStack
      marginBottom={marginBottom}
      {...rest}
    >
      <Center>
        <Text
          fontFamily={"heading"}
          textAlign="center"
          bold
          fontSize={28}
        >
          {title}
        </Text>
        <Text
          textAlign="center"
          fontSize={16}
        >
          {description}
        </Text>
      </Center>
    </VStack>
  );
}
