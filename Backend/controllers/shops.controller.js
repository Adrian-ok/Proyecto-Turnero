import { connection } from '../db.js'

export const createShops = async (req, res) => {
    const { nombre, departamento, direccion } = req.body;

    try {
        const result = await connection.query(
            "INSERT INTO sucursales (nombre, departamento, direccion) VALUES (?, ?, ?)",
            [nombre, departamento, direccion]
        );
        res.json(result[0].affectedRows);
    } catch (error) {
        return res.status(500).json([error.message,]);
    }
};

export const getAllShops = async (req, res) => {
    try {
        const [result] = await connection.query(
            "SELECT * FROM sucursales",
        );
        res.json(result);
    } catch (error) {
        return res.status(500).json([error.message]);
    }
}

export const getShop = async (req, res) => {
    const result = await connection.query("SELECT * FROM sucursales WHERE id_sucursal = ?", [
        req.params.id,
    ]);

    if (result[0].length === 0) {
        return res.status(404).json(["No existe una sucursal con ese id",]);
    }

    // return res.json(result.rows[0]);
    return res.json(result[0]);
}

export const updateShops = async (req, res) => {
    const id = req.params.id;
    const { nombre, departamento, direccion } = req.body;

    const result = await connection.query(
        "UPDATE sucursales SET nombre = ?, departamento = ?, direccion = ? WHERE id_sucursal = ? ",
        [nombre, departamento, direccion, id]
    );

    if (result[0].affectedRows === 0) {
        return res.status(404).json(["No existe una tarea con ese id",]);
    }

    return res.json(result[0].affectedRows);
}

export const deleteShop = async (req, res) => {
    const result = await connection.query("DELETE FROM sucursales WHERE id_sucursal = ?", [
        req.params.id,
    ]);

    if (result[0].affectedRows === 0) {
        return res.status(404).json(["No existe una tarea con ese id",]);
    }

    return res.sendStatus(200);
}