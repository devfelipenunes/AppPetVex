import { Box, ScrollView } from "native-base";
import PetRaceBtn from "./PetRaceBtn";
import Input from "./Input";

export default function PetRace() {
  const races = [
    { name: "Vira-lata", img: "" },
    { name: "Poodle", img: "" },
    { name: "Pitbull", img: "" },
    { name: "Pug", img: "" },
    { name: "Bulldog", img: "" },
  ];

  return (
    <>
      <Box
        mb={10}
        px={30}
      >
        <Input text={"Raça"} />
      </Box>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {races.map((item, index) => (
          <PetRaceBtn text={item.name} />
        ))}
      </ScrollView>
    </>
  );
}
