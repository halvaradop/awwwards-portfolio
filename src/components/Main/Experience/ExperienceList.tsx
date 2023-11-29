import { ExperienceListProps } from "../../../@types/props"
import { ExperienceWork } from "./ExperienceWork"

const ExperienceList = ({ experiences }: ExperienceListProps) => {

    return (
        <ul className="mt-6 grid gap-y-12 base:mt-0">
            {experiences.map((experience, key) => (
                <ExperienceWork key={key} experience={experience} />
            ))}
        </ul>
    )
}

export { ExperienceList }