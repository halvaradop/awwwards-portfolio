import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { TechnologiesListProps } from "../../../@types/props"
import { merge } from "../../../utils/merge"

const TechnologiesList = ({ className = "", technologies, input, range }: TechnologiesListProps) => {
    const ref = useRef<HTMLUListElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        axis: "y",
        offset: ["0% 100%", "100% 0%"],
    })
    const x = useTransform(scrollYProgress, input, range)


    return (    
        <motion.ul className={merge("w-full flex items-center justify-center gap-x-6 sm:gap-x-8 md:gap-x-10 base:gap-x-12", className)} style={{ x }} ref={ref}>
            {technologies.map((tech, key) => (
                <li className="group min-w-max flex items-center gap-x-6 sm:gap-x-8 md:gap-x-10 base:gap-x-12" key={key}>
                    <span className="w-1.5 h-1.5 block rounded-full bg-black-100" />
                    {tech}
                    <span className="w-1.5 h-1.5 hidden rounded-full bg-black-100 group-last:block" />
                </li>
            ))}
        </motion.ul>
    )
}

export { TechnologiesList }