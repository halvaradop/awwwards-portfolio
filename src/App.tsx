import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom"
import { AppLayout } from "./components/Layouts/AppLayout"

const App = () => {

    const router = createBrowserRouter(createRoutesFromElements(
        <Route  path="/" element={<AppLayout />}>

        </Route>
    ))
     
    return <RouterProvider router={router} />
}

export default App
