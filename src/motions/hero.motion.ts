import { Variants } from "framer-motion"
import { orquestation } from "../utils/orquestation"


const segmentsVariants: Variants = {
    hidden: {},
    visible: {
        transition: orquestation({ 
            staggerChildren: 1, 
            staggerDirection: -1 
        })
    }
}

const containerVariants: Variants = {
    visible: {
        transition: orquestation({ 
            staggerChildren: 0.1,
            delayChildren: 0.25 
        })
    }
}

const nameVariants: Variants = {
    hidden: {
        x: -50,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 70,
            damping: 20
        }
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
            stiffness: 80,
            mass: 0.4
        },
    }
}


const lineVariants: Variants = {
    hidden: {
        x: -50,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: { 
            delay: 1.4,
            type: "spring",
            stiffness: 100,
            mass: 0.8
        }
    }
}

const paragraphVariants: Variants = {
    hidden: {
        y: "80%",
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 2,
            ease: "easeOut",
        }
    }
}

export { 
    segmentsVariants,
    containerVariants, 
    nameVariants, 
    itemsVariants,
    lineVariants,
    paragraphVariants 
}