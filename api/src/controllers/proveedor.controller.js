import * as ServicioProveedor from '../services/proveedor.service.js';

// solicitud de creación
export const crearProveedor = async (req, res) => {
  try {
    const proveedor = await ServicioProveedor.crearProveedor(req.body);
    // created
    return res.status(201).json(proveedor);
  } catch (err) {
    // bad request
    return res.status(400).json({ message: err.message });
  }
};

// solicitud de obtención
export const obtenerProveedores = async (req, res) => {
  try {
    const proveedores = await ServicioProveedor.obtenerProveedores();
    // not found
    if (!proveedores) return res.status(404).json({ message: 'No existen proveedores registrados' });
    // ok
    return res.status(200).json(proveedores);
  } catch (err) {
    // internal server error
    return res.status(500).json({ message: err.message });
  }
};

// solicitud de obtención especifica
export const obtenerProveedorPorId = async (req, res) => {
  try {
    const proveedor = await ServicioProveedor.obtenerProveedorPorId(req.params.id);
    if (!proveedor) return res.status(404).json({ message: 'Proveedor no encontrado' });
    return res.json(proveedor);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// solicitud de actualización
export const actualizarProveedor = async (req, res) => {
  try {
    const proveedor = await ServicioProveedor.actualizarProveedor(req.params.id, req.body);
    if (!proveedor) return res.status(404).json({ message: 'Proveedor no encontrado' });
    return res.json(proveedor);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

// solicitud de eliminación
export const eliminarProveedor = async (req, res) => {
  try {
    const proveedor = await ServicioProveedor.eliminarProveedor(req.params.id);
    if (!proveedor) return res.status(404).json({ message: 'Proveedor no encontrado' });
    return res.json({ message: 'Proveedor eliminado' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};