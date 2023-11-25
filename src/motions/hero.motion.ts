import { Variants } from "framer-motion"
import { orquestation } from "../utils/orquestation"


const segmentsVariants: Variants = {
    hidden: {},
    visible: {
        transition: orquestation({ 
            staggerChildren: 1.6, 
            staggerDirection: -1 
        })
    }
}

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: orquestation({ 
            staggerChildren: 0.3,
            delayChildren: 0.25 
        })
    }
}

const titlesVariants: Variants = {
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


const lineVariants: Variants = {
    hidden: {
        x: -50,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: { delay: 2.65 }
    }
}

const paragraphVariants: Variants = {
    hidden: {
        y: 50,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            ease: "easeInOut",
            delay: 2.7
        }
    }
}

export { 
    segmentsVariants,
    containerVariants, 
    titlesVariants, 
    nameVariants, 
    lineVariants,
    paragraphVariants 
}