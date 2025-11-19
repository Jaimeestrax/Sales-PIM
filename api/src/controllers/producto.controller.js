import * as ServicioProducto from '../services/producto.service.js';

// solicitud de creación
export const crearProducto = async (req, res) => {
  try {
    const producto = await ServicioProducto.crearProducto(req.body);
    // created
    return res.status(201).json(producto);
  } catch (err) {
    // Bad request
    return res.status(400).json({ message: err.message });
  }
};

// solicitud de obtención
export const obtenerProductos = async (req, res) => {
  try {
    const productos = await ServicioProducto.obtenerProductos();
    if (!productos) return res.status(404).json({ message: 'No existen productos registrados' });
    return res.status(200).json(productos);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// solicitud de obtención especifica
export const obtenerProductoPorId = async (req, res) => {
  try {
    const producto = await ServicioProducto.obtenerProductoPorId(req.params.id);
    if (!producto) return res.status(404).json({ message: 'Producto no encontrado' });
    return res.json(producto);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// solicitud de actualización
export const actualizarProducto = async (req, res) => {
  try {
    const producto = await ServicioProducto.actualizarProducto(req.params.id, req.body);
    if (!producto) return res.status(404).json({ message: 'Producto no encontrado' });
    return res.json(producto);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

// solicitud de eliminación
export const eliminarProducto = async (req, res) => {
  try {
    const producto = await ServicioProducto.eliminarProducto(req.params.id);
    if (!producto) return res.status(404).json({ message: 'Producto no encontrado' });
    return res.json({ message: 'Producto eliminado' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};