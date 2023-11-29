import { motion } from "framer-motion"
import { TextProps } from "../../../@types/props"
import { merge } from "../../../utils/merge"

const Text = ({  className = "", text, variants, initial, animate, exit }: TextProps) => {

    return (
        <div className={merge("overflow-hidden", className)}>
            <motion.p variants={variants} initial={initial} animate={animate} exit={exit}>{text}</motion.p>
        </div>
    )
}

export { Text }