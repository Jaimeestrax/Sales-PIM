import inventarioModel from '../schemas/inventario.model.js';
import productoModel from '../schemas/producto.model.js';

// creación de un inventario
export const crearInventario = async (data) => {
  const { id_producto, cantidad } = data;
  const producto = await productoModel.findById(id_producto);
  if (!producto) throw new Error('Producto no encontrado');

  const inventario = new inventarioModel({ id_producto, cantidad });
  return await inventario.save();
};

// obtener todos los inventarios
export const obtenerInventario = async () => {
  return await inventarioModel.find().populate('Producto');
};

// Obtener un inventario especifico
export const obtenerInventarioPorProductoId = async (id) => {
  return await inventarioModel.findOne({ id_producto: id }).populate('Producto');
};

// actualizar un inventario (aumenta o disminuye productos)
export const actualizarInventario = async (id, data) => {
  const { operacion, cantidad } = data; // operacion: 'more -> aumentar', 'less -> disminuir'
  const inventario = await inventarioModel.findById(id);
  if (!inventario) throw new Error('Inventario no encontrado');

  if (operacion === 'more') {
    inventario.cantidad += cantidad;
  } else if (operacion === 'less') {
    if (inventario.cantidad < 0 || inventario.cantidad < cantidad) throw new Error('No hay stock disponible');
    inventario.cantidad -= cantidad;
  }

  return await inventario.save();
};

// eliminar inventario
export const eliminarInventario = async (id) => {
  return await inventarioModel.findByIdAndDelete(id);
};