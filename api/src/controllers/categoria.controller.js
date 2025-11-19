import * as ServicioCategoria from '../services/categoria.service.js';

// solicitud de creación
export const crearCategoria = async (req, res) => {
  try {
    const categoria = await ServicioCategoria.crearCategoria(req.body);
    return res.status(201).json(categoria);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

// solicitud de obtención
export const obtenerCategorias = async (req, res) => {
  try {
    const categorias = await ServicioCategoria.obtenerCategorias();
    if (!categorias) return res.status(404).json({ message: 'No existen categorías registradas' });
    return res.status(200).json(categorias);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// solicitud de obtención especifica
export const obtenerCategoriaPorId = async (req, res) => {
  try {
    const categoria = await ServicioCategoria.obtenerCategoriaPorId(req.params.id);
    if (!categoria) return res.status(404).json({ message: 'Categoría no encontrada' });
    return res.json(categoria);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// solicitud de actualización
export const actualizarCategoria = async (req, res) => {
  try {
    const categoria = await ServicioCategoria.actualizarCategoria(req.params.id, req.body);
    if (!categoria) return res.status(404).json({ message: 'Categoría no encontrada' });
    return res.json(categoria);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

// solicitud de eliminación
export const eliminarCategoria = async (req, res) => {
  try {
    const categoria = await ServicioCategoria.eliminarCategoria(req.params.id);
    if (!categoria) return res.status(404).json({ message: 'Categoría no encontrada' });
    return res.json({ message: 'Categoría eliminada' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};