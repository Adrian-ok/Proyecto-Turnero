import { AdminLayout } from '../layouts'
import { HomeAdmin, Sucursales, Servicios, Empleados, Turnos } from '../pages/Admin'

const routesAdmin = [
    {
        path: '/admin',
        layout: AdminLayout,
        component: HomeAdmin,
        exact: true,
        requiresAuth: true,
    },
    {
        path: '/sucursales',
        layout: AdminLayout,
        component: Sucursales,
        exact: true,
    },
    {
        path: '/empleados',
        layout: AdminLayout,
        component: Servicios,
        exact: true,
    },
    {
        path: '/servicios',
        layout: AdminLayout,
        component: Empleados,
        exact: true,
    },
    {
        path: '/turnos',
        layout: AdminLayout,
        component: Turnos,
        exact: true,
    }
]

export default routesAdmin