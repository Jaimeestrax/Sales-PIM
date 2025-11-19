import * as ServicioMarca from '../services/marca.service.js';

// solicitud de creación
export const crearMarca = async (req, res) => {
  try {
    const marca = await ServicioMarca.crearMarca(req.body);
    return res.status(201).json(marca);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

// solicitud de obtención
export const obtenerMarcas = async (req, res) => {
  try {
    const marcas = await ServicioMarca.obtenerMarcas();
    if (!marcas) return res.status(404).json({ message: 'No existen marcas registradas' });
    return res.status(200).json(marcas);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// solicitud de obtención especifica
export const obtenerMarcaPorId = async (req, res) => {
  try {
    const marca = await ServicioMarca.obtenerMarcaPorId(req.params.id);
    if (!marca) return res.status(404).json({ message: 'Marca no encontrada' });
    return res.json(marca);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// solicitud de actualización
export const actualizarMarca = async (req, res) => {
  try {
    const marca = await ServicioMarca.actualizarMarca(req.params.id, req.body);
    if (!marca) return res.status(404).json({ message: 'Marca no encontrada' });
    return res.json(marca);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

// solicitud de eliminación
export const eliminarMarca = async (req, res) => {
  try {
    const marca = await ServicioMarca.eliminarMarca(req.params.id);
    if (!marca) return res.status(404).json({ message: 'Marca no encontrada' });
    return res.json({ message: 'Marca eliminada' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};