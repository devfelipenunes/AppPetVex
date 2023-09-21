import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PetStepOne from "../screen/PetStepOne";
import PetStepTwo from "../screen/PetStepTwo";
import PetStepThree from "../screen/PetStepThree";

const { Screen, Navigator } = createNativeStackNavigator();

export default function Intro() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="PetStepOne"
    >
      <Screen
        name="PetStepOne"
        component={PetStepOne}
      />
      <Screen
        name="PetStepTwo"
        component={PetStepTwo}
      />
      <Screen
        name="PetStepThree"
        component={PetStepThree}
      />
    </Navigator>
  );
}
