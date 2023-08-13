import { HStack, Pressable, Text, VStack } from "native-base";
import PetSexBtn from "./PetSexBtn";

import PetF from '../../assets/pet/petFeminino.png'
import PetM from '../../assets/pet/petMasculino.png'
import Footer from "./Footer";

const sex = [
    { img: PetF, onPress: () => console.log("PetSexBtn") },
    { img: PetM, onPress: () => console.log("PetSexBtn") },

]


export default function PetSex() {
    return (
        <VStack>
            <Text>Sexo</Text>
            <HStack
                justifyContent={"space-between"}
                px={10}
                py={5}




            >

                {
                    sex.map((item, index) => (
                        <PetSexBtn img={item.img} onPress={item.onPress} />

                    ))
                }

            </HStack>
            
        </VStack>
    )
}