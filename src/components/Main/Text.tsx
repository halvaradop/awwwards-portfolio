import { motion } from "framer-motion"
import { TextProps } from "../../@types/props"
import { itemsVariants } from "../../motions/about.motion"

const Text = ({ text }: TextProps) => {

    return (
        <div className="overflow-hidden">
            <motion.p variants={itemsVariants}>{text}</motion.p>
        </div>
    )
}

export { Text }