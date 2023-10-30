import { createPool } from "mysql2/promise"

export const connection = createPool({
    host: 'localhost',
    user: 'root',
    password: '0303',
    database: 'turnero'
})