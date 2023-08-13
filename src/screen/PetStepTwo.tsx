import { Box, Pressable, Text } from "native-base";
import { Footer, Header, Screen, TopScreen } from "../components";
import PetRace from "../components/PetRace";

export default function PetStepTwo({navigation}){


    function goStepThree(){
        navigation.navigate("PetStepThree")   
    }

    return(
        <Screen
        paddingX="0"
        >
            <Box
            px={30}
            >

            <TopScreen />
            <Header 
                title="Informações da Raça do Pet"
                description="Excelente!
                Agora, precisamos de mais detalhes
                sobre o seu pet. Por favor, 
                informe a raça do seu querido companheiro:
                "
                />
                </Box>
            <PetRace />
        <Footer
        btnR
        onPressR={goStepThree}
        />
        
        </Screen>
    )   
}