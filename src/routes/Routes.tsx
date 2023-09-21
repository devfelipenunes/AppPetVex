import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./App.routes";
import Intro from "./Intro.routes";

export default function Routes() {
  const firtStep = true;

  return (
    <NavigationContainer>
      {firtStep ? <Intro /> : <AppRoutes />}
    </NavigationContainer>
  );
}
