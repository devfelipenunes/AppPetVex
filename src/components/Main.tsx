import { IScrollViewProps, ScrollView } from "native-base";

type Props = IScrollViewProps & {
  children: React.ReactNode;
};

export default function Main({ children, ...rest }: Props) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      {...rest}
    >
      {children}
    </ScrollView>
  );
}
