import mongoose from 'mongoose';

const inventarioSchema = new mongoose.Schema({
  id_producto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Producto',
    required: true,
    unique: true // Un solo registro por producto
  },
  cantidad: {
    type: Number,
    required: true,
    min: 0,
    default: 0
  },
  ultima_actualizacion: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true,
  collection: 'inventario'
});

const inventarioModel = mongoose.model('Inventario', inventarioSchema);
export default inventarioModel;