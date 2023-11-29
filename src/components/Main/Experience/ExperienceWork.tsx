import { ExperienceWorkProps } from "../../../@types/props"

const ExperienceWork = ({ experience }: ExperienceWorkProps) => {
    const { role, company, date, technologies } = experience

    return (
        <article className="w-full">
            <div className="w-full grid grid-cols-[auto,1fr] text-sm md:text-base base:grid-cols-2">
                <h2 className="col-span-2 text-2xl font-vollkorn font-medium base:col-span-1">{role}</h2>
                <p className="text-purple base:col-span-2">{company}</p>
                <h3 className="justify-self-end base:col-start-2 base:col-end-3 base:row-start-1">{date}</h3>
            </div>
            <ul className="mt-4 flex flex-col gap-y-2">
                {technologies.map((item, key) => (
                    <li key={key}>- {item}</li>
                ))}
            </ul>
        </article>
    )
}

export { ExperienceWork } 