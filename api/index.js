import app from './app.js';

import rutasCategoria from './src/routes/categoria.route.js';
import rutasInventario from './src/routes/inventario.route.js';
import rutasMarca from './src/routes/marca.route.js';
import rutasProducto from './src/routes/producto.route.js';
import rutasProovedor from './src/routes/proveedor.route.js';

// establecemos el puerto de escucha de express
const port = process.env.PORT || 5000;

// rutas
app.use('/api/categorias', rutasCategoria);
app.use('/api/inventarios', rutasInventario);
app.use('/api/marcas', rutasMarca);
app.use('/api/productos', rutasProducto);
app.use('/api/proovedores', rutasProovedor);

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
})