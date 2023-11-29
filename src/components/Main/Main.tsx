import { About } from "./About/About"
import { BackgroundPattern } from "./Pattern/BackgroundPattern"
import { Hero } from "./Hero"
import { Knowledge } from "./Knowledge"
import { Creative } from "./Technologies"
import { skills } from "../../utils/data.utils"


const Main = () => {

    return (
        <main className="mb-96 w-11/12 mx-auto flex items-center justify-center flex-col static base:w-10/12 base:max-w-screen-xl">
            <section className="min-h-[calc(100vh-5rem-2px)] grid place-content-center">
                <Hero />
                <Knowledge technologies={skills}/>
                <BackgroundPattern />
            </section>
            <About />    
            <Creative />  
            <section className="h-screen"></section>
        </main>
    )
}

export { Main }