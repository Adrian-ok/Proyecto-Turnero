import { AdminLayout } from '../layouts'
import { HomeAdmin } from '../pages/Admin'

const routesAdmin = [
    {
        path: '/admin',
        layout: AdminLayout,
        component: HomeAdmin,
        exact: true,
        requiresAuth: true,
    },
]

export default routesAdmin