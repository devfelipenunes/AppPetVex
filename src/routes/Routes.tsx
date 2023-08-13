import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./App.routes";

export default function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
