import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes/Routes';
import Home from './src/screen/PetStepOne';
import { Box, NativeBaseProvider } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <Routes />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
