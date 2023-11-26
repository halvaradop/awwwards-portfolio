import { KnowledgeProps } from "../../@types/props"

const Knowledge = ({ technologies }: KnowledgeProps) => {

    return (
        <section className="mt-20 sm:mt-24">
            <ul className="w-full flex flex-wrap items-center justify-evenly gap-5 text-xl font-medium font-vollkorn sm:gap-x-8 md:gap-x-10 md:text-2xl base:gap-x-14">
                {technologies.map((tech, key) => (
                    <li key={key}>{tech}</li>
                ))}
            </ul>
        </section>
    )
}



export { Knowledge }