import { IScrollViewProps, ScrollView } from "native-base";

type Props = IScrollViewProps & {
  children: React.ReactNode;
};

export default function Main({ children, ...rest }: Props) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 100,
      }}
      {...rest}
    >
      {children}
    </ScrollView>
  );
}
