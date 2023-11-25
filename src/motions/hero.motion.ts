import { Variants } from "framer-motion"

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            type: "spring",
            when: "beforeChildren",
            staggerChildren: 0.3,
            delayChildren: 0.25
        }
    }
}

const itemsVariants: Variants = {
    hidden: {
        y: "80%",
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
}

const titleVariants: Variants = {
    hidden: {
        x: -50,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 1,
            type: "spring",
            stiffness: 70,
            damping: 20
        }
    }
}

export { containerVariants, itemsVariants, titleVariants }