import { connection } from '../db.js'

export const getAllUsers = async (req, res) => {
    try {
        const result = a

    } catch (error) {
        console.error('Error al obtener listado:', error)
        res.status(500).json({ message: error.message })
    }
}