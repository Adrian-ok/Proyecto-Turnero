import { WorkerLayout } from '../layouts'
import { HomeWorker } from '../pages/Worker'

const routesWorker = [
    {
        path: '/worker',
        layout: WorkerLayout,
        component: HomeWorker,
        exact: true
    },
]

export default routesWorker