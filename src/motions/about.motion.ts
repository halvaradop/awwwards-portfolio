import { Variants } from "framer-motion"
import { orquestation } from "../utils/orquestation"

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: orquestation({
            staggerChildren: 0.5
        })
    }
}

const itemsVariants: Variants = {
    hidden: {
        y: "50%",
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 40,
            damping: 8,
        }
    }
}

export { containerVariants, itemsVariants }