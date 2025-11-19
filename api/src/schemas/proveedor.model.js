import mongoose from 'mongoose';

const proveedorSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  descripcion: {
    type: String,
    required: true
  },
  marcas: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Marca',
    required: true
  }],
}, {
  timestamps: true,
  collection: 'proveedores'
});

const proveedorModel = mongoose.model('Proveedor', proveedorSchema);
export default proveedorModel;