import mongoose from 'mongoose';

const categoriaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  descripcion: {
    type: String,
    required: false
  },
  productos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Producto'
  }],
}, {
  timestamps: true,
  collection: 'categorias'
});

const categoriaModel = mongoose.model('Categoria', categoriaSchema);
export default categoriaModel;