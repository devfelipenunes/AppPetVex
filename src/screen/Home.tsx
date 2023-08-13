import { Box, Image, Pressable, Text, View } from "native-base";
import { Dimensions, ImageBackground } from "react-native";
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

  console.log(data[1].name);

  return (
    <Carousel
      data={data}
      layout={"tinder"}
      
      itemWidth={500}
      renderItem={({ item, index }) => {
        console.log('%cMyProject%cline:65%cindex', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(39, 72, 98);padding:3px;border-radius:2px', index)
        return (
          <Pressable
            
            onPress={() => {
              navigation.navigate({ name: "PetHome", params: { item } });
            }}
            w={"100%"}
            h={"100%"}
            bg={item.bg}
          >
            {data[0] && (
              <Box
                alignSelf={"flex-end"}
                w={200}
                h={50}
                bg={"white"}
                zIndex={1}
                bottom={200}
                py={1}
                px={2}
                justifyContent={"center"}
                position={"absolute"}
              >
                <Text
                fontSize={25}
                >{data[1].name}</Text>
              </Box>
            )}
            <Image
              zIndex={0}
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
