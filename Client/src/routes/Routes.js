import routerAdmin from '../routes/routesAdmin.js'
import routerClient from '../routes/routesClient.js'
import routesWorker from '../routes/routesWorker.js'
import { ErrorLayout } from '../layouts'
import { Error404 } from '../pages'

//ambos devuelven un array de obj, para obtener el obj es decir el contenido
//utilizo el spreed operator
const routes = [
    ...routerAdmin, 
    ...routerClient, 
    ...routesWorker,
    { 
        path: '*',
        layout: ErrorLayout,
        component: Error404,
    },
]

export default routes