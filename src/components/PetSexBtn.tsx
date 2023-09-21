import { Image, Pressable } from "native-base";
import { GestureResponderEvent, ImageSourcePropType } from "react-native";

interface Props {
  img: ImageSourcePropType | undefined;
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
}

export default function PetSexBtn({ img, onPress }: Props) {
  return (
    <Pressable
      bg={"blue.400"}
      h={100}
      w={100}
      justifyItems={"center"}
      alignItems={"center"}
      borderRadius={50}
      onPress={onPress}
    >
      <Image
        h={"50%"}
        w={"40%"}
        bg={"red.400"}
        resizeMode="contain"
        source={img}
      />
    </Pressable>
  );
}
