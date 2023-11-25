import { motion } from "framer-motion"
import { containerVariants, itemsVariants, titleVariants } from "../../motions/hero.motion"
import auroraRight from "../../assets/icons/aurora-right.svg"
import auroraLeft from "../../assets/icons/aurora-left.svg"
import auroraLeftDesktop from "../../assets/icons/aurora-left-desktop.svg"
import auroraRightDesktop from "../../assets/icons/aurora-right-desktop.svg"

const Hero = () => {

    return (
        <section className="lg:grid lg:grid-cols-[1fr,0.6fr] lg:items-center lg:gap-x-5">
            <div className="font-normal">
                <motion.div className="flex items-center" variants={titleVariants} initial="hidden" animate="visible">
                    <span className="w-7 h-0.5 mr-2 block bg-black md:text-lg" />
                    <h2 className="flex items-center">Hola, soy Hernan Alvarado</h2>                
                </motion.div>
                <motion.h1 className="my-4 text-black text-5xl font-vollkorn sm:text-6xl md:text-7xl xl:text-8xl" variants={containerVariants} initial="hidden" animate="visible" >
                    <div className="overflow-hidden">
                        <motion.span className="block" variants={itemsVariants}>Desarrollador De</motion.span>
                    </div>
                    <div className="overflow-hidden">
                        <motion.span className="block" variants={itemsVariants}>Software</motion.span>
                    </div>
                </motion.h1>                
            </div>
            <div>
                <span className="w-7 h-0.5 mr-2 block bg-black"/>
                <p className="mt-4 md:text-lg">
                    Soy un apasionado desarrollador especializado en la creación de soluciones que impactan 
                    positivamente en la vida de las personas. He trabajado en una variedad de proyectos, 
                    desempeñando roles clave a lo largo de mi carrera profesional.
                </p>
            </div>
            <picture>
                <source media="(min-width: 1024px)" srcSet={auroraRightDesktop} />
                <img className="absolute top-0 right-0 -z-10" src={auroraRight} alt="aurora" loading="lazy" draggable="false" />
            </picture>
            <picture>
                <source media="(min-width: 1024px)" srcSet={auroraLeftDesktop} />
                <img className="absolute bottom-0 left-0 -z-10" src={auroraLeft} alt="aurora" loading="lazy" draggable="false" />
            </picture>
        </section>
    )
}


export { Hero }