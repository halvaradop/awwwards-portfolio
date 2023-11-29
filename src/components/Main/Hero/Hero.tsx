import { motion } from "framer-motion"
import { LayerText } from "../IsView/LayerText"
import { containerVariants, paragraphVariants, nameVariants, segmentsVariants, lineVariants, itemsVariants } from "../../../motions/hero.motion"
import { titleText } from "../../../utils/data.utils"


const Hero = () => {

    return (
        <section className="lg:grid lg:grid-cols-sec lg:items-center lg:gap-x-5">
            <motion.div className="font-normal" variants={segmentsVariants} initial="hidden" animate="visible"> 
                <motion.div className="flex items-center" variants={nameVariants}>
                    <span className="w-7 h-0.5 mr-2 block bg-black md:text-lg" />
                    <h2 className="flex items-center">Hola, soy Hernan Alvarado</h2>
                </motion.div>            
                <motion.section className="w-min my-4 text-5xl font-vollkorn xs:text-6xl md:text-7xl xl:text-8xl" variants={containerVariants}>
                    <section className="flex">
                        <LayerText messages={titleText.developer} variants={itemsVariants} />
                    </section>
                    <section className="flex nth-3:ml-6">
                        <LayerText messages={titleText.software} variants={itemsVariants} />
                    </section>
                </motion.section>                
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