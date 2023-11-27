import { useRef } from "react"
import { useScroll, useTransform } from "framer-motion"
import { ParallaxColumn } from "./ParallaxColumn"
import { parallaxCol1, parallaxCol2, parallaxCol3, parallaxCol4 } from "../../../utils/parallax.utils"


const Parallax = () => {
    const ref = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0% 100%", "100% 0%"],
        smooth: 10
    })
    const y = useTransform(scrollYProgress, [0, 1], [0, -window.innerHeight * 0.8])

    return (
        <section className="w-full max-h-screen mt-6 px-3 grid grid-cols-3 gap-x-2 overflow-hidden rounded-md bg-black nth-[even]:top-[5%] nth-[odd]:top-[10%] sm:gap-x-4 md:gap-x-6 base:gap-x-8" ref={ref}>
            <ParallaxColumn cols={parallaxCol1} y={y} />
            <ParallaxColumn cols={parallaxCol2} y={y} />
            <ParallaxColumn cols={parallaxCol3} y={y} />
            <ParallaxColumn className="hidden" cols={parallaxCol4} y={y} />
        </section>
    )
}

export {  Parallax }