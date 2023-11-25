import { Header } from "../Header/Header"
import { Main } from "../Main/Main"

const AppLayout = () => {

    return (
        <div className="select-none overflow-hidden base:relative">
            <Header />
            <Main />
        </div>
    )
}

export { AppLayout }