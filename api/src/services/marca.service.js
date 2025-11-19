import marcaModel from '../schemas/marca.model.js';

// creación de un marca
export const crearMarca = async (data) => {
  const marca = new marcaModel(data);
  return await marca.save();
};

// obtener todos los marcas
export const obtenerMarcas = async () => {
  return await marcaModel.find().populate('id_proveedor categorias');
};

// obtener un marca especifico
export const obtenerMarcaPorId = async (id) => {
  return await marcaModel.findById(id).populate('id_proveedor categorias');
};

// actualizar un marca
export const actualizarMarca = async (id, data) => {
  return await marcaModel.findByIdAndUpdate(id, data, { new: true });
};

// eliminar un marca
export const eliminarMarca = async (id) => {
  return await marcaModel.findByIdAndDelete(id);
};