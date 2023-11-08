import { json } from 'express'
import { connection } from '../db.js'
import { createAccessToken } from '../libs/jwt.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config.js'

// export const register = async (req, res) => {
//     try {
//         const { email, password, username } = req.body

//         const passwordHash = await bcrypt.hash(password, 10)
//         const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ')

//         await connection.query('INSERT INTO usuario (nombre, email, contrasena, creado) VALUES (?, ?, ?, ?)',
//             [username, email, passwordHash, currentDate])

//         const idUserSaved = await connection.query('SELECT LAST_INSERT_ID() as id')
//         const userId = idUserSaved[0][0].id

//         const token = await createAccessToken({ userId, username })

//         res.cookie('token', token)
//         res.json({ message: 'Usuario creado correctamente' })

//     } catch (error) {
//         console.error('Error al crear el usuario:', error)
//         res.status(500).json({ message: error.message })
//     }
// }

export const login = async (req, res) => {
    const { email, password } = req.body

    try {
        const result = await connection.query('SELECT * FROM usuario WHERE email = ?', [email])

        if (result[0].length === 0) {
            return res.status(400).json(['El correo no existe'])
        }

        const validPassword = await bcrypt.compare(password, result[0][0].contrasena)

        if (!validPassword) {
            return res.status(400).json(['Contraseña incorrecta'])
        }

        const token = await createAccessToken({ email })

        res.cookie('token', token)

        return res.json(result[0][0])

    } catch (error) {
        console.error('Error al crear el usuario:', error)
        res.status(500).json({ message: error.message })
    }
}

export const logout = async (req, res) => {
    res.clearCookie('token')
    res.sendStatus(200)
}

export const profile = (req, res) => {
    console.log(req.user)
    res.send('profile')
}

export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ')

        const query = `SELECT * FROM usuario WHERE email = ?`;
        const [rows] = await connection.query(query, [email]);

        if (rows.length > 0)
            return res.status(400).json(["El correo electrónico ya está en uso"]);

        // hashing the password
        const passwordHash = await bcrypt.hash(password, 10);

        // creating the user
        const newUser = {
            nombre: username,
            email: email,
            contrasena: passwordHash,
            creado: currentDate
        };

        // saving the user in the database
        const insertQuery = `INSERT INTO usuario SET ?`;
        const [result] = await connection.query(insertQuery, newUser);

        const userSaved = {
            id: result.insertId,
            username,
            email,
        };

        // create access token
        const token = await createAccessToken({
            id: userSaved.id,
        });

        res.cookie("token", token);
        res.json(userSaved)
    } catch (error) {
        res.status(500).json([error.message]);
    }
};

export const verifyToken = async (req, res) => {
    const { token } = req.cookies

    if (!token) return res.status(401).json(['Unauthorized'])

    jwt.verify(token, TOKEN_SECRET, async (err, user) => {
        if (err) return res.status(401).json(['Unauthorized'])

        // console.log('ESTO ES USER', user)
        const userFound = await connection.query('SELECT * FROM usuario WHERE email = ?', [user.email])

        if (!userFound) return res.status(401).json(['Unauthorized'])
        console.log('ESTO ES USER FOUND', userFound[0][0])

        return res.json({
            id: userFound[0][0].id_usuario,
            username: userFound[0][0].nombre,
            email: userFound[0][0].email
        })
    })
}
