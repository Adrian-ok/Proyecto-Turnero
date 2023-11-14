import { ClientLayout, ErrorLayout } from '../layouts'
import { HomeClient, Home, LoginPage, RegisterPage, SelectSucursal, SelectService, SelectDatetime, SelectBarber, ConfirmTurn } from '../pages/Client'

const routesClient = [
    {
        path: '/',
        layout: ClientLayout,
        component: Home,
        exact: true,
    },
    {
        path: '/Login',
        layout: ErrorLayout,
        component: LoginPage,
        exact: true,
    },
    {
        path: '/Register',
        layout: ErrorLayout,
        component: RegisterPage,
        exact: true,
    },
    {
        path: '/client',
        layout: ClientLayout,
        component: HomeClient,
        exact: true,
    },
    {
        path: '/selectSucursal',
        layout: ClientLayout,
        component: SelectSucursal,
        exact: true,
    },
    {
        path: '/selectService',
        layout: ClientLayout,
        component: SelectService,
        exact: true,
    },
    {
        path: '/selectDatetime',
        layout: ClientLayout,
        component: SelectDatetime,
        exact: true,
    },
    {
        path: '/selectBarber',
        layout: ClientLayout,
        component: SelectBarber,
        exact: true,
    },
    {
        path: '/confirm',
        layout: ClientLayout,
        component: ConfirmTurn,
        exact: true,
    },
]

export default routesClient