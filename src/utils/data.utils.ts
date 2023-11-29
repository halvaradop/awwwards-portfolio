import { ExperienceWork } from "../@types/types"

const titleText = {
    developer: "Ingeniero".split(""),
    software: "De  Software".split("")
}

const skills = ["UI", "Diseño", "Ingeniero", "Desarollador", "UX"]
const questions = ["De donde vengo,", "Donde estoy", "A donde aspiro ir."]

const paragraphs = [
    "Soy Hernan Alvarado, estudiante de 20 años de Ingeniería de Sistemas en la Universidad El Bosque. Mi personalidad se forma a través de mi pasión por el arte, la música y tecnología",
    "Como desarrollador, mi objetivo es crear soluciones eficientes y creativas, integrando estas pasiones en proyectos innovadores. Programar para mi es una montaña rusa de emociones que disfruto",
    "Aspiro a ser una persona integral para la sociedad, brindado soluciones y cumpliendo los deseos de los demás. Me considero una persona ambrienta de conocimiento, siempre ansioso por descubrir nuevas tecnologías y aprender continuamente"
]

const techologies = [["Java", "Javascript", "React", "Redux", "Typescript", "Spring Boot", "PL SQL"], ["HTML", "CSS", "React Router", "Framer Motion", "TailwindCSS", "Figma", "SQL"]]
const creativeTitle = ["Tecnologías", "Herramientas"]

const experiencesList: ExperienceWork[] = [
    { 
        role: "Ingeniero de software", 
        company: "TailwindCSS", 
        date: "Agosto 2023 - presente",  
        technologies: [
            "Desarrollo de un plugin React, optimizando componentes con variantes",
            "Diseño y desarrollo de aplicaciones web con React",
            "Integración exitosa de múltiples API externas en diversas plataformas"
        ]
    },
    {
        role: "Desarrollador frontend",
        company: "Freelance",
        date: "Junio 2023 - presente",
        technologies: [
            "Desarrollo de proyectos frontend de alta calidad para diversas compañías, asegurando resultados exitosos y cumpliendo con los más altos estándares de calidad"
        ]

    }
]

export { titleText, questions, paragraphs, skills, techologies, creativeTitle, experiencesList }