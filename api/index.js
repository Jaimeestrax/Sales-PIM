import app from './app.js';

import rutasCategoria from './src/routes/categoria.route.js';
import rutasInventario from './src/routes/inventario.route.js';
import rutasMarca from './src/routes/marca.route.js';
import rutasProducto from './src/routes/producto.route.js';
import rutasProovedor from './src/routes/proveedor.route.js';

// establecemos el puerto de escucha de express
const port = process.env.PORT || 5000;

app.get('/api/test', (req, res) => {
    console.log("Entrada detectada a /api/test desde:", req.ip);
    res.send("Conexión correcta al backend");
});


// rutas
app.use('/api/categorias', rutasCategoria);
app.use('/api/inventarios', rutasInventario);
app.use('/api/marcas', rutasMarca);
app.use('/api/productos', rutasProducto);
app.use('/api/proveedores', rutasProovedor);

app.listen(port, "0.0.0.0", () => {
    //console.log(`Server listening on http://localhost:${port}`);
    console.log(`Server listening on port ${port}`);
})