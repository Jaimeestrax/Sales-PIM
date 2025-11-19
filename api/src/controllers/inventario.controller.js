import * as ServicioInventario from '../services/inventario.service.js';

// solicitud de creación
export const crearInventario = async (req, res) => {
  try {
    const inventario = await ServicioInventario.crearInventario(req.body);
    return res.status(201).json(inventario);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

// solicitud de obtención
export const obtenerInventario = async (req, res) => {
  try {
    const inventario = await ServicioInventario.obtenerInventario();
    if (!inventario) return res.status(404).json({ message: 'No hay registros de inventario' });
    return res.status(200).json(inventario);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// solicitud de obtención especifica
export const obtenerInventarioPorProductoId = async (req, res) => {
  try {
    const inventario = await ServicioInventario.obtenerInventarioPorProductoId(req.params.id);
    if (!inventario) return res.status(404).json({ message: 'Inventario no encontrado' });
    return res.json(inventario);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// solicitud de actualización
export const actualizarInventario = async (req, res) => {
  try {
    const inventario = await ServicioInventario.actualizarInventario(req.params.id, req.body);
    if (!inventario) return res.status(404).json({ message: 'Inventario no encontrado' });
    return res.json(inventario);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

// solicitud de eliminación
export const eliminarInventario = async (req, res) => {
  try {
    const inventario = await ServicioInventario.eliminarInventario(req.params.id);
    if (!inventario) return res.status(404).json({ message: 'Inventario no encontrado' });
    return res.json({ message: 'Inventario eliminado' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};