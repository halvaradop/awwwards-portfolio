import { About } from "./About/About"
import { BackgroundPattern } from "./Pattern/BackgroundPattern"
import { Hero } from "./Hero/Hero"
import { Knowledge } from "./Knowledge/Knowledge"
import { Technologies } from "./Technologies/Technologies"
import { skills } from "../../utils/data.utils"
import { Experience } from "./Experience/Experience"


const Main = () => {

    return (
        <main className="mb-96 w-11/12 mx-auto flex items-center justify-center flex-col static base:w-10/12 base:max-w-screen-xl">
            <section className="min-h-[calc(100vh-5rem-2px)] grid place-content-center">
                <Hero />
                <Knowledge technologies={skills}/>
                <BackgroundPattern />
            </section>
            <About />    
            <Technologies />  
            <Experience />
        </main>
    )
}

export { Main }