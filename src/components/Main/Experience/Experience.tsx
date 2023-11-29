import { Text } from "../IsView/Text"
import { LayerIsView } from "../IsView/LayerIsView"
import { containerVariants, itemsVariants } from "../../../motions/about.motion"
import { experiencesList } from "../../../utils/data.utils"
import { ExperienceList } from "./ExperienceList"

const Experience = () => {

    return (
        <section className="w-full mt-20 sm:mt-24 md:mt-28 base:mt-32 base:grid base:grid-cols-[auto,1fr] base:gap-x-10 lg:gap-x-12 xl:gap-x-14">
            <LayerIsView className="text-4xl font-vollkorn sm:text-5xl md:text-6xl base:text-5xl lg:text-6xl" options={{ margin: "0% 0% -30% 0%", once: true }} variants={containerVariants} initial="hidden" animate="visible">
                <Text text="Experiencia" variants={itemsVariants} />
            </LayerIsView>
            <ExperienceList experiences={experiencesList} />
        </section>
    )
}

export { Experience }