import sql from 'mssql';
import { pool } from '../config/db.js';

export const getUsers = async (req, res) => {
  const result = await pool.request()
    .query('SELECT * FROM users');
  res.json(result.recordset);
};

export const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: 'Nombre y email son obligatorios' });
    }

    await pool.request()
      .input('name', name)
      .input('email', email)
      .query(
        'INSERT INTO users (name, email) VALUES (@name, @email)'
      );

    res.status(201).json({ message: 'Usuario creado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear usuario' });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: 'Nombre y email son obligatorios' });
    }

    const result = await pool.request()
      .input('id', id)
      .input('name', name)
      .input('email', email)
      .query(
        'UPDATE users SET name = @name, email = @email WHERE id = @id'
      );

    if (result.rowsAffected[0] === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.json({ message: 'Usuario actualizado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar usuario' });
  }
};


export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.request()
      .input('id', id)
      .query(
        'DELETE FROM users WHERE id = @id'
      );

    if (result.rowsAffected[0] === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar usuario' });
  }
};

