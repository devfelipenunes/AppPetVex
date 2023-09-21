import Routes from "./src/routes/Routes";
import { NativeBaseProvider, StatusBar } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar />
      <Routes />
    </NativeBaseProvider>
  );
}
