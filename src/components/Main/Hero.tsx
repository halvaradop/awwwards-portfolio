import { motion } from "framer-motion"
import { containerVariants, titlesVariants, paragraphVariants, nameVariants, segmentsVariants, lineVariants } from "../../motions/hero.motion"


const Hero = () => {

    return (
        <section className="lg:grid lg:grid-cols-[1fr,0.55fr] lg:items-center lg:gap-x-5">
            <motion.div className="font-normal" variants={segmentsVariants} initial="hidden" animate="visible"> 
                <motion.div className="flex items-center" variants={nameVariants}>
                    <span className="w-7 h-0.5 mr-2 block bg-black md:text-lg" />
                    <h2 className="flex items-center">Hola, soy Hernan Alvarado</h2>
                </motion.div>            
                <motion.h1 className="my-4 text-black text-4xl font-vollkorn sm:text-6xl md:text-7xl" variants={containerVariants}>
                    <div className="overflow-hidden">
                        <motion.span className="block" variants={titlesVariants}>Desarrollador</motion.span>
                    </div>
                    <div className="overflow-hidden">
                        <motion.span className="block" variants={titlesVariants}>De Software</motion.span>
                    </div>
                </motion.h1>                
            </motion.div>
            <div>
                <motion.span className="w-7 h-0.5 block bg-black" variants={lineVariants} initial="hidden" animate="visible" />
                <motion.p className="mt-4 md:text-lg" variants={paragraphVariants} initial="hidden" animate="visible">
                    Soy un apasionado desarrollador especializado en la creación de soluciones que impactan
                    positivamente en la vida de las personas. He trabajado en una variedad de proyectos,
                    desempeñando roles clave a lo largo de mi carrera profesional.
                </motion.p>            
            </div>
        </section>
    )
}


export { Hero }