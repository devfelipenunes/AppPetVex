import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PetStepOne from "../screen/PetStepOne";
import PetStepTwo from "../screen/PetStepTwo";
import PetStepThree from "../screen/PetStepThree";
import Home from "../screen/Home";
import PetHome from "../screen/PetHome";
import PetSettings from "../screen/PetSettings";
import PetVaccine from "../screen/PetVaccine";
import PetVaccineAdd from "../screen/PetVaccineAdd";
import PetOwner from "../screen/PetOwner";

const { Screen, Navigator } = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Screen
        name="Home"
        component={Home}
      />
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
      <Screen
        name="PetHome"
        component={PetHome}
      />
      <Screen
        name="PetSettings"
        component={PetSettings}
      />
      <Screen
        name="PetVaccine"
        component={PetVaccine}
      />
      <Screen
        name="PetVaccineAdd"
        component={PetVaccineAdd}
      />
      <Screen
        name="PetOwner"
        component={PetOwner}
      />
    </Navigator>
  );
}