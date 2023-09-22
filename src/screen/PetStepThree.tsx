import { useEffect, useState } from "react";
import { Footer, Header, Screen, TopScreen } from "../components";
import { Button } from "native-base";
import * as ImagePicker from "expo-image-picker";
import { Image } from "react-native";

export default function PetStepThree({ navigation, route }) {
  const { name, sex, pet } = route.params;
  const [image, setImage] = useState(null);

  useEffect(() => {
    console.log(pet);
  }, [name, sex, pet]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  function goHome() {
    navigation.navigate("Home");
  }
  return (
    <Screen>
      <TopScreen />
      <Header
        title="Informações da Raça do Pet"
        description="Agora, vamos adicionar um toque pessoal   ao perfil do seu pet. Adicione uma foto adorável para que possamos identificá-lo facilmente:"
      />
      {image ? (
        <Image
          alt="pet"
          source={{ uri: image }}
          style={{ width: "100%", height: 300 }}
        />
      ) : (
        <Image
          alt="pet"
          source={{ uri: pet?.image?.url }}
          style={{ width: "100%", height: 300 }}
        />
      )}
      <Button onPress={pickImage}>to aqui</Button>

      <Footer
        btnR
        onPressR={goHome}
      />
    </Screen>
  );
}
