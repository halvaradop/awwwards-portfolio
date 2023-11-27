import { containerVariants, itemsVariants } from "../../motions/about.motion"
import { LayerIsView } from "./IsView/LayerIsView"
import { Text } from "./IsView/Text"
import { Parallax } from "./Parallax/Parallax"


const Creative = () => {


    return (
        <section className="w-full mt-20 ">
            <LayerIsView className="text-4xl font-vollkorn sm:text-5xl md:text-6xl base:text-5xl lg:text-6xl xl:text-7xl" options={{ margin: "0% 0% -30% 0%", once: true }} variants={containerVariants} initial="hidden" animate="visible">
                <Text text="Creatividad" variants={itemsVariants} />
                <Text text="Elegancia" variants={itemsVariants} />
            </LayerIsView>
            <Parallax />
        </section>
    )
}

export { Creative }