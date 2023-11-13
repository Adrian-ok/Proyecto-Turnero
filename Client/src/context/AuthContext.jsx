import { createContext, useState, useContext, useEffect } from 'react'
import { registerRequest, loginRequest, verifyTokenRequest } from '../api/Auth.js'
import Cookies from 'js-cookie'

export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth error')
    }
    return context
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [errors, setErrors] = useState([])

    const signUp = async (user) => {
        try {
            const res = await registerRequest(user)
            console.log('Esto es user', res)
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error) {
            setErrors(error.response.data)
        }
    }

    const signIn = async (user) => {
        try {
            const res = await loginRequest(user)
            console.log('ESTO ES LOGIN', res)
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error) {
            console.log(error.response.data)
            setErrors(error.response.data)
        }
    }

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([])
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [errors])

    useEffect(() => {
        async function checkLogin() {
            const cookies = Cookies.get()

            if (cookies.token) {
                try {
                    const res = await verifyTokenRequest(cookies.token)
                    if (!res.data) return setIsAuthenticated(false)

                    setIsAuthenticated(true)
                    // console.log('ESTO ES RESS DATA USEEFFECT', res.data)
                    setUser(res.data)
                } catch (error) {
                    setIsAuthenticated(false)
                    console.log('PASO NULL')
                    setUser(null)
                }
            }
        }
        checkLogin()
    }, [])


    return (
        <AuthContext.Provider
            value={{
                signUp,
                signIn,
                user,
                isAuthenticated,
                errors
            }}
        >
            {children}
        </AuthContext.Provider>
    )

}