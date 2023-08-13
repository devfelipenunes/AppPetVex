import { Pressable } from "native-base";

export default function PetPhotoBtn({ onPress }) {
  return (
    <Pressable
      w={"45%"}
      h={50}
      bg={"red.500"}
      onPress={onPress}
    ></Pressable>
  );
}
