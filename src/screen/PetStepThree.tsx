import { useEffect, useState } from "react";
import { Footer, Header, Screen, TopScreen } from "../components";
import { Button } from "native-base";
import * as ImagePicker from "expo-image-picker";
import { Image } from "react-native";
import * as SQLite from "expo-sqlite";

export default function PetStepThree({ navigation, route }) {
  const { name, sex, pet } = route.params;

  const [result, setResult] = useState();
  const db = SQLite.openDatabase("database.db");

  const [image, setImage] = useState(null);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS pets (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, sex TEXT, pet TEXT, image TEXT)"
      );
    });

    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM pets",
        null,
        (txObj, resultSet) => setResult(resultSet.rows._array),
        (txObj, error) => console.log(error)
      );
    });

    console.log(result);
  }, [db]);

  const addPet = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO pets (name, sex, pet, image) values (?,?,?,?)",
        [name, sex, pet, image],
        (txObj, resultSet) => {
          console.log("txObj", txObj);
          console.log("resultSet", resultSet);
        },
        (txObj, error) => console.log(error)
      );
    });
  };

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
        onPressR={addPet}
      />
    </Screen>
  );
}
