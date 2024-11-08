import { createElement } from "react"
import { useRoutes } from "react-router-dom"
import { Home } from "../pages/Home"
import { UserView } from "../pages/User"
import { Create } from "../pages/Create" 
import { NotFound } from "../pages/NotFound"

export const RouterProvider = () => {
    const routes = useRoutes([
        { path: "/", element: createElement(Home) },
        { path: "/user/:id", element: createElement(UserView) },
        { path: "/user/create", element: createElement(Create) },
        { path: "/*", element: createElement(NotFound) },
    ])

    return routes
}