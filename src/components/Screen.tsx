import {ScrollView, VStack} from 'native-base';

type Props = {
  children: React.ReactNode;
  paddingX?: string;
  flex?: number;
};

export default function Screen({children, paddingX = '30px', flex}: Props) {
  return (
    <ScrollView
      flex={flex}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}>
      <VStack flex={1} paddingX={paddingX} h={'100%'}>
        {children}
      </VStack>
    </ScrollView>
  );
}