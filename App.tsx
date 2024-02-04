import Routes from "./src/routes/Routes";
import { NativeBaseProvider, StatusBar } from "native-base";
import Dashboard from "./src/screen/Dashboard";

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar />

      <Routes />
    </NativeBaseProvider>
  );
}
