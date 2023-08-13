import { Box, Image, Pressable, View } from "native-base";
import { Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";

import BGFred from "../../assets/pet/MOCK/BGFred.png";
import BGBob from "../../assets/pet/MOCK/BGBob.png";

export default function Home({ navigation }) {
  const data = [
    {
      id: 1,
      name: "Fred",
      sex: "Macho",
      weight: "2 KG",
      age: "2 anos",
      bg: "red.200",
      img: BGFred,
      vaccines: [
        {
          name: "V8",
          date: "10/10/2021",
        },
        {
          name: "V8",
          date: "10/10/2021",
        },
        {
          name: "V8",
          date: "10/10/2021",
        },
      ],
    },
    {
      id: 2,
      name: "Bob",
      sex: "Femea",
      weight: "2 KG",
      age: "2 anos",
      bg: "blue.200",
      img: BGBob,
      vaccines: [
        {
          name: "V8",
          date: "10/10/2021",
        },
        {
          name: "V8",
          date: "10/10/2021",
        },
        {
          name: "V8",
          date: "10/10/2021",
        },
      ],
    },
  ];

  return (
    <Carousel
      data={data}
      layout={"tinder"}
      itemWidth={500}
      renderItem={({ item, index }) => {
        return (
          <Pressable
            onPress={() => {
              navigation.navigate({ name: "PetHome", params: { item } });
            }}
            w={"100%"}
            h={"100%"}
            bg={item.bg}
          >
            <Image
              resizeMode={"cover"}
              w={"100%"}
              h={"100%"}
              source={item.img}
              alt={"pet"}
            />
          </Pressable>
        );
      }}
      sliderWidth={Dimensions.get("screen").width}
    />
  );
}
