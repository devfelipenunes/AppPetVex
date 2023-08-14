import { IInputProps, Input as InpuT, Text } from "native-base";

type Props = IInputProps & {
  text?: string;
  error?: string;
};

export default function Input({ text, error, ...rest }: Props) {
  return (
    <>
      <Text>{text}</Text>
      <InpuT {...rest} />
      <Text>{error}</Text>
    </>
  );
}
