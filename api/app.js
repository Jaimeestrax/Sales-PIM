import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connecDB } from './src/configuration/connection.js';

// conexión a la db
connecDB();

// creación de la aplicación con express
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default app;