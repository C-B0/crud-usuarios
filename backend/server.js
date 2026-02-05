import express from 'express';
import usersRoutes from './routes/userRoutes.js';

const app = express();

app.use(express.json());

// 👇 AQUÍ es clave
app.use('/users', usersRoutes);

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});
