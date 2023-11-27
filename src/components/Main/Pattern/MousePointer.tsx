import { motion } from "framer-motion"
import { useMousePosition } from "../../../hooks/useMousePosition"

const MousePointer = () => {
    const { x, y } = useMousePosition()

    return (
        <motion.span 
            className="w-5 h-5 block absolute rounded-full bg-purple-500"
            style={{ top: y - 10, left: x -10 }}
            transition={{ type: "spring", stiffness: 500, damping: 300 }}
        />
    )
}

export { MousePointer }