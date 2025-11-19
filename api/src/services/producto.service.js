import productoModel from "../schemas/producto.model.js";

// creación de un producto
export const crearProducto = async (data) => {
  const producto = new productoModel(data);
  return await producto.save();
};

// obtener todos los productos
export const obtenerProductos = async () => {
  return await productoModel.find().populate('Marca Categoria');
};

// obtener un producto especifico
export const obtenerProductoPorId = async (id) => {
  return await productoModel.findById(id).populate('Marca Categoria');
};

// actualizar un producto
export const actualizarProducto = async (id, data) => {
  return await productoModel.findByIdAndUpdate(id, data, { new: true });
};

// eliminar un producto
export const eliminarProducto = async (id) => {
  return await productoModel.findByIdAndDelete(id);
};