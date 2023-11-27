import { LayerIsView } from "../IsView/LayerIsView"
import { LayerText } from "../IsView/LayerText"
import { containerVariants, itemsVariants, textVariants } from "../../../motions/about.motion"
import { paragraphs, questions } from "../../../utils/data.utils"
import { Text } from "../IsView/Text"


const About = () => {

    return (
        <section className="w-full base:grid base:grid-cols-sec base:gap-x-5">
            <LayerIsView className="text-4xl font-vollkorn sm:text-5xl md:text-6xl base:text-5xl lg:text-6xl xl:text-7xl" options={{ margin: "0% 0% -30% 0%", once: true }} variants={containerVariants} initial="hidden" animate="visible">
                <LayerText messages={questions} variants={itemsVariants} />
            </LayerIsView>
            <div className="mt-14 grid gap-y-8 leading-7 base:mt-0">
                {paragraphs.map((paragraph, key) => (
                    <LayerIsView key={key} options={{ margin: "0% 0% -10% 0%", once: true }} variants={containerVariants} initial="hidden" animate="visible">
                        <Text text={paragraph} variants={textVariants} />
                    </LayerIsView>
                ))}
            </div>
        </section>
    )
}

export { About }