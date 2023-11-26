import { LayerIsView } from "../LayerIsView"
import { LayerText } from "../LayerText"
import { containerVariants, itemsVariants } from "../../../motions/about.motion"
import { paragraphs, questions } from "../../../utils/data.utils"


const About = () => {

    return (
        <section className="w-full mt-10 base:grid base:grid-cols-sec base:gap-x-5">
            <LayerIsView className="text-4xl font-vollkorn sm:text-5xl md:text-6xl base:text-5xl lg:text-6xl xl:text-7xl" options={{ margin: "0% 0% -30% 0%" }} variants={containerVariants} initial="hidden" animate="visible">
                <LayerText messages={questions} variants={itemsVariants} />
            </LayerIsView>
            <div className="mt-10 grid gap-y-8 leading-7 base:mt-0">
                {paragraphs.map((paragraph, key) => (
                    <p key={key}>{paragraph}</p>
                ))}
            </div>
        </section>
    )
}

export { About }