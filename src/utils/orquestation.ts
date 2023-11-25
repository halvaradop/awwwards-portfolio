import { Transition } from "framer-motion"

const orquestation = (extras: Transition): Transition => {
    return {
        type: "spring",
        when: "beforeChildren",
        ...extras
    }
}

export { orquestation }