import proveedorModel from '../schemas/proveedor.model.js';

// creación de un proveedor
export const crearProveedor = async (data) => {
  const proveedor = new proveedorModel(data);
  return await proveedor.save();
};

// obtener todos los proveedores
export const obtenerProveedores = async () => {
  return await proveedorModel.find().populate('Marca');
};

// obtener un proveedor especifico
export const obtenerProveedorPorId = async (id) => {
  return await proveedorModel.findById(id).populate('Marca');
};

// actualizar un proveedor
export const actualizarProveedor = async (id, data) => {
  return await proveedorModel.findByIdAndUpdate(id, data, { new: true });
};

// eliminar un proveedor
export const eliminarProveedor = async (id) => {
  return await proveedorModel.findByIdAndDelete(id);
};