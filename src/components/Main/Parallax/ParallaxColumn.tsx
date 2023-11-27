import { motion } from "framer-motion"
import { ParallaxColumnProps } from "../../../@types/props"
import { merge } from "../../../utils/merge"

const ParallaxColumn = ({ className = "", cols, y }: ParallaxColumnProps) => {

    return (
        <motion.figure className={merge("w-full h-[130%] flex flex-col gap-y-4 relative sm:gap-y-6 md:gap-y-8 base:gap-y-10", className)} style={{ y }}>
            {cols.map((path, key) => (
                <img className="w-full h-full min-h-[225px] object-cover rounded-md" key={key} src={path} alt="image" loading="lazy" draggable="false" />
            ))}
        </motion.figure>
    )
}

export { ParallaxColumn }