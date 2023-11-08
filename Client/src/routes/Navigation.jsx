import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import routes from './Routes'
import { map } from 'lodash'
import { useAuth } from '../context/AuthContext'

const ProtectedRoute = ({ element, isProtected }) => {
    const { user, isAuthenticated } = useAuth()

    console.log('PROTECTOR', isProtected, isAuthenticated)

    if (isProtected && !isAuthenticated) {
        return <Navigate to="/login" />
    }
    return element
}

export function Navigation() {
    return (
        <Router>
            <Routes>
                {map(routes, (route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                            <route.layout>
                                <ProtectedRoute
                                    element={<route.component></route.component>}
                                    isProtected={route.isProtected}
                                />
                            </route.layout>
                        }
                    />
                ))}
            </Routes>
        </Router>
    )
}

// <Router>
//     <Routes>
//         {map(routes, (route, index) => (
//             <Route
//                 key={index}
//                 path={route.path}
//                 element={
//                     <route.layout>
//                         <route.component></route.component>
//                     </route.layout>
//                 }
//             />
//         ))}
//     </Routes>
// </Router>