import { ClientLayout } from '../layouts'
import {HomeClient} from '../pages/Client'

const routesClient = [
    {
        path: '/',
        layout: ClientLayout,
        component: HomeClient,
        exact: true
    },
]

export default routesClient