import { IInputProps, Input as InpuT, Text } from "native-base";

type Props = IInputProps & {
  text?: string;
};

export default function Input({ text, ...rest }: Props) {
  return (
    <>
      <Text>{text}</Text>
      <InpuT {...rest} />
    </>
  );
}
