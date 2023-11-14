import { createPool } from "mysql2/promise"

export const connection = createPool({
    host: 'localhost',
    user: 'root',
    password: '0303',
    // password: 'yawn348garb702',
    database: 'turnero'
})