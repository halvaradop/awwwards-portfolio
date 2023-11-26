import { Variants } from "framer-motion"
import { orquestation } from "../utils/orquestation"

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: orquestation({
            staggerChildren: 0.25
        })
    }
}

const itemsVariants: Variants = {
    hidden: {
        y: "100%",
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 10,
            damping: 15,
            mass: 0.2            
        },
    }
}

export { containerVariants, itemsVariants }