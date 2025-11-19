import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  descripcion: {
    type: String,
    required: false
  },
  id_marca: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Marca',
    required: false
  },
  id_categoria: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categoria',
    required: false
  }
}, {
    timestamps: true,
    collection: 'productos'
});

const productoModel = mongoose.model('Producto', productoSchema);
export default productoModel;