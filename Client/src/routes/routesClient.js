import { ClientLayout, ErrorLayout } from '../layouts'
import { HomeClient, Home, LoginPage, RegisterPage } from '../pages/Client'

const routesClient = [
    {
        path: '/',
        layout: ClientLayout,
        component: Home,
        exact: true,
        requiresAuth: false,
    },
    {
        path: '/Login',
        layout: ErrorLayout,
        component: LoginPage,
        exact: true,
        requiresAuth: false,
    },
    {
        path: '/Register',
        layout: ErrorLayout,
        component: RegisterPage,
        exact: true,
        requiresAuth: false,
    },
    {
        path: '/client',
        layout: ClientLayout,
        component: HomeClient,
        exact: true,
        requiresAuth: true,
    },
]

export default routesClient