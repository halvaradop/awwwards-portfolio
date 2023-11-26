import { About } from "./About/About"
import { BackgroundPattern } from "./BackgroundPattern"
import { Hero } from "./Hero"
import { Knowledge } from "./Knowledge"

const technologies = ["UI", "Diseño", "Ingeniero", "Desarollador", "UX"]

const Main = () => {

    return (
        <main className="mb-20 w-11/12 mx-auto flex items-center justify-center flex-col static base:w-10/12 base:max-w-screen-xl">
            <section className="min-h-[calc(100vh-5rem-2px)] grid place-content-center">
                <Hero />
                <Knowledge technologies={technologies}/>
                <BackgroundPattern />
            </section>
            <About />            
        </main>
    )
}

export { Main }