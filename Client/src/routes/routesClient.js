import { ClientLayout, ErrorLayout } from '../layouts'
import { HomeClient, Home, LoginPage, RegisterPage } from '../pages/Client'

const routesClient = [
    {
        path: '/',
        layout: ClientLayout,
        component: Home,
        exact: true,
        isProtected: false
    },
    {
        path: '/Login',
        layout: ErrorLayout,
        component: LoginPage,
        exact: true,
        isProtected: false
    },
    {
        path: '/Register',
        layout: ErrorLayout,
        component: RegisterPage,
        exact: true,
        isProtected: false
    },
    {
        path: '/client',
        layout: ClientLayout,
        component: HomeClient,
        exact: true,
        isProtected: true
    },
]

export default routesClient