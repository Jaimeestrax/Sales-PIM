import categoriaModel from '../schemas/categoria.model.js';

// creación de un categoria
export const crearCategoria = async (data) => {
  const categoria = new categoriaModel(data);
  return await categoria.save();
};

// obtener todos los categorias
export const obtenerCategorias = async () => {
  return await categoriaModel.find().populate('productos');
};

// obtener un categoria especifico
export const obtenerCategoriaPorId = async (id) => {
  return await categoriaModel.findById(id).populate('productos');
};

// actualizar un categoria
export const actualizarCategoria = async (id, data) => {
  return await categoriaModel.findByIdAndUpdate(id, data, { new: true });
};

// eliminar un categoria
export const eliminarCategoria = async (id) => {
  return await categoriaModel.findByIdAndDelete(id);
};