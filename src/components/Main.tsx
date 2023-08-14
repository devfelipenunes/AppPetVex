import {VStack} from 'native-base';
import {IVStackProps} from 'native-base/lib/typescript/components/primitives/Stack/VStack';

type Props = IVStackProps & {
  children: React.ReactNode;
};

export default function Main({children, ...rest}: Props) {
  return (
    <VStack pb="150px" {...rest}>
      {children}
    </VStack>
  );
}