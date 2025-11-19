import express from 'express';
import {
  crearMarca,
  obtenerMarcas,
  obtenerMarcaPorId,
  actualizarMarca,
  eliminarMarca,
} from '../controllers/marca.controller.js';

const router = express.Router();

router.post('/', crearMarca);
router.get('/', obtenerMarcas);
router.get('/:id', obtenerMarcaPorId);
router.put('/:id', actualizarMarca);
router.delete('/:id', eliminarMarca);

export default router;