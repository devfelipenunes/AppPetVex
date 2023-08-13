import { Pressable, Text } from "native-base";

export default function PetRaceBtn( {text}){
    return(
        <Pressable
            w={200}
            h={200}
            bg={'blue.500'}
            mr={10}
        >
            <Text>{text}</Text>
        </Pressable>
    )
}