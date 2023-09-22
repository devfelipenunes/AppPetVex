import { ScrollView, VStack } from "native-base";
import { Platform } from "react-native";

type Props = {
  children: React.ReactNode;
  paddingX?: string;
  flex?: number;
};

export default function Screen({ children, paddingX = "30px", flex }: Props) {
  return (
    <VStack
      flex={1}
      paddingX={paddingX}
      py={Platform.OS === "ios" ? "40px" : "0px"}
    >
      {children}
    </VStack>
  );
}
