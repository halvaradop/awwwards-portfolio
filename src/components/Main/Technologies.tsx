import { containerVariants, itemsVariants } from "../../motions/about.motion"
import { LayerIsView } from "./IsView/LayerIsView"
import { TechnologiesList } from "./TechnologiesList"
import { creativeTitle, techologies } from "../../utils/data.utils"
import { LayerText } from "./IsView/LayerText"


const Creative = () => {


    return (
        <section className="w-full mt-20 sm:mt-24 base:mt-28 lg:mt-32">
            <LayerIsView className="text-4xl font-vollkorn sm:text-5xl md:text-6xl base:text-5xl lg:text-6xl xl:text-7xl" options={{ margin: "0% 0% -30% 0%", once: true }} variants={containerVariants} initial="hidden" animate="visible">
                <LayerText messages={creativeTitle} variants={itemsVariants} />
            </LayerIsView>   
            <section className="mt-6 flex flex-col gap-y-3 overflow-hidden sm:mt-8 sm:gap-y-5 sm:text-lg md:mt-10 md:text-xl">
                <TechnologiesList technologies={techologies[0]} input={[0, 1]} range={["-20%", "20%"]} />
                <TechnologiesList technologies={techologies[1]} input={[1, 0]} range={["-20%", "20%"]} />
            </section>    
        </section>
    )
}

export { Creative }