import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { LayerIsViewProps } from "../../@types/props"

const LayerIsView = ({ className = "", children, variants, animate = "", initial = "",  exit = "", options }: LayerIsViewProps) => {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, options)

    return (
        <motion.section className={className} ref={ref} variants={variants} animate={isInView ? animate : ""} initial={initial} exit={exit}>
            {children}
        </motion.section>
    )
}

export { LayerIsView }