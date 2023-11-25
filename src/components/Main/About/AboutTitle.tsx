import { useRef } from "react"
import { useInView, motion } from "framer-motion"
import { Text } from "../Text"
import { containerVariants } from "../../../motions/about.motion"

const titles = ["De donde vengo,", "Donde estoy", "Adonde aspiro ir."]

const AboutTitle = () => {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, {
        once: true,
    })

    return (
        <motion.div className="text-4xl font-vollkorn sm:text-5xl md:text-6xl base:text-5xl" ref={ref} variants={containerVariants} initial="hidden" animate={ isInView ? "visible" : "" }>
            {titles.map((text, key) => (
                <Text key={key} text={text} />
            ))}
        </motion.div>
    )
}

export { AboutTitle }