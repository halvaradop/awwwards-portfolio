import { Variants } from "framer-motion"

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            type: "spring",
            when: "beforeChildren",
            staggerChildren: 0.3
        }
    }
}

const itemsVariants: Variants = {
    hidden: {
        y: "50%",
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1
    }
}

export { containerVariants, itemsVariants }