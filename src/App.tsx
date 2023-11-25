import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom"
import { AppLayout } from "./components/Layouts/AppLayout"

const App = () => {
    const options = {
        basename: "/awwwards-portfolio"
    } as const

    const router = createBrowserRouter(createRoutesFromElements(
        <Route  path="/" element={<AppLayout />}>

        </Route>
    ), options)
     
    return <RouterProvider router={router} />
}

export default App
