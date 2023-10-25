import { connection } from '../db.js'
import { createAccessToken } from '../libs/jwt.js'
import bcrypt from 'bcryptjs'

export const register = async (req, res) => {
    try {
        const { email, password, username } = req.body

        const passwordHash = await bcrypt.hash(password, 10)
        const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ')

        await connection.query('INSERT INTO usuario (nombre, email, contrasena, creado) VALUES (?, ?, ?, ?)', 
        [username, email, passwordHash, currentDate])

        const token = await createAccessToken({username})
        
        res.cookie('token', token)
        res.json({message: 'Usuario creado correctamente'})

    } catch (error) {
        console.error('Error al crear el usuario:', error)
        res.status(500).json({message: error.message})
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body

    try {
        const result = await connection.query('SELECT * FROM usuario WHERE email = ?', [email])

        if (result[0].length === 0) {
            return res.status(400).json({
                message: 'El correo no existe'
            })
        }

        const validPassword = await bcrypt.compare(password, result[0][0].contrasena)

        if (!validPassword) {
            return res.status(400).json({
                message: 'Contraseña incorrecta'
            })
        }
        
        const token = await createAccessToken({email})

        res.cookie('token', token)

        return res.json(result[0][0])

    } catch (error) {
        console.error('Error al crear el usuario:', error)
        res.status(500).json({message: error.message})
    }
}