import mongoose from 'mongoose';

const marcaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  id_proveedor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Proveedor',
    required: true
  },
  categorias: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categoria'
  }],
}, {
  timestamps: true,
  collection: 'marcas'
});

const marcaModel = mongoose.model('Marca', marcaSchema);
export default marcaModel;