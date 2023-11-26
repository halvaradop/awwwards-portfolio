import { Text } from "./Text"
import { LayerTextProps } from "../../@types/props"

const LayerText = ({ className = "", messages, variants }: LayerTextProps) => {
    return messages.map((message, key) => (
        <Text key={key} className={className} text={message} variants={variants} />
    ))
}

export { LayerText }