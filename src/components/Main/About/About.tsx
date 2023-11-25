import { AboutTitle } from "./AboutTitle"


const About = () => {

    return (
        <section className="mt-10 base:grid base:grid-cols-2 base:gap-x-5">
            <AboutTitle />
            <div className="mt-10 grid gap-y-8 leading-7 base:mt-0">
                <p className="w-full">
                    Soy Hernan Alvarado, un estudiante de 20 años de Ingeniería de Sistemas en la Universidad 
                    El Bosque. Mi personalidad se forma a través de mi amor por el arte, la música y la 
                    tecnología. 
                </p>
                <p className="w-full">
                    Como desarrollador, mi objetivo es crear soluciones eficientes y creativas, integrando 
                    estas pasiones en proyectos innovadores. Programar para mí es una montaña rusa de 
                    emociones que disfruto plenamente. 
                </p>
                <p className="w-full">
                    Aspiro a ser una persona integral para la sociedad, brindando soluciones y cumpliendo 
                    los deseos de los demás. Me considero una persona ávida de conocimiento, siempre ansioso 
                    por descubrir nuevas tecnologías y aprender continuamente.
                </p>
            </div>
        </section>
    )
}

export { About }