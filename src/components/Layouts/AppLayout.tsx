import { Header } from "../Header/Header"
import { Main } from "../Main/Main"

const AppLayout = () => {

    return (
        <div className="select-text overflow-hidden base:relative selection:text-[#6f349d] selection:bg-[#c29ede]">
            <Header />
            <Main />
        </div>
    )
}

export { AppLayout }