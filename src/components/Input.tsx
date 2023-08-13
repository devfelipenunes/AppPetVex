import { Input as InpuT, Text } from "native-base"

export default function Input({text}) {
    return(
        <>
            <Text>{text}</Text>
            <InpuT />
        </>
    )
}