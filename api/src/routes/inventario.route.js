import express from 'express';
import {
  crearInventario,
  obtenerInventario,
  obtenerInventarioPorProductoId,
  actualizarInventario,
  eliminarInventario,
} from '../controllers/inventario.controller.js';

const router = express.Router();

router.post('/', crearInventario);
router.get('/', obtenerInventario);
router.get('/producto/:id', obtenerInventarioPorProductoId);
router.put('/:id', actualizarInventario);
router.delete('/:id', eliminarInventario);

export default router;