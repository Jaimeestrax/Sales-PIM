console.log("✅ Script.js cargado");

const BASE_URL = 'http://localhost:1234/api';

async function fetchApi(endpoint, method = 'GET', body = null) {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  if (body) options.body = JSON.stringify(body);

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, options);
    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Proveedor
function crearProveedor() {
  const nombre = document.getElementById('proveedorNombre').value;
  const descripcion = document.getElementById('proveedorDescripcion').value;
  const output = document.getElementById('proveedorOutput');

  fetchApi('/proveedores', 'POST', { nombre, descripcion })
    .then(result => {
      output.innerHTML = `<pre>${JSON.stringify(result.data, null, 2)}</pre>`;
    });
}

function obtenerProveedores() {
  const output = document.getElementById('proveedorOutput');
  fetchApi('/proveedores')
    .then(result => {
      output.innerHTML = `<pre>${JSON.stringify(result.data, null, 2)}</pre>`;
    });
}

// Marca
function crearMarca() {
  const nombre = document.getElementById('marcaNombre').value;
  const descripcion = document.getElementById('marcaDescripcion').value;
  const id_proveedor = document.getElementById('marcaIdProveedor').value;
  const output = document.getElementById('marcaOutput');

  fetchApi('/marcas', 'POST', { nombre, descripcion, id_proveedor })
    .then(result => {
      output.innerHTML = `<pre>${JSON.stringify(result.data, null, 2)}</pre>`;
    });
}

function obtenerMarcas() {
  const output = document.getElementById('marcaOutput');
  fetchApi('/marcas')
    .then(result => {
      output.innerHTML = `<pre>${JSON.stringify(result.data, null, 2)}</pre>`;
    });
}

// Categoría
function crearCategoria() {
  const nombre = document.getElementById('categoriaNombre').value;
  const descripcion = document.getElementById('categoriaDescripcion').value;
  const output = document.getElementById('categoriaOutput');

  fetchApi('/categorias', 'POST', { nombre, descripcion })
    .then(result => {
      output.innerHTML = `<pre>${JSON.stringify(result.data, null, 2)}</pre>`;
    });
}

function obtenerCategorias() {
  const output = document.getElementById('categoriaOutput');
  fetchApi('/categorias')
    .then(result => {
      output.innerHTML = `<pre>${JSON.stringify(result.data, null, 2)}</pre>`;
    });
}

// Producto
function crearProducto() {
  const nombre = document.getElementById('productoNombre').value;
  const descripcion = document.getElementById('productoDescripcion').value;
  const id_marca = document.getElementById('productoIdMarca').value;
  const id_categoria = document.getElementById('productoIdCategoria').value;
  const output = document.getElementById('productoOutput');

  fetchApi('/productos', 'POST', { nombre, descripcion, id_marca, id_categoria })
    .then(result => {
      output.innerHTML = `<pre>${JSON.stringify(result.data, null, 2)}</pre>`;
    });
}

function obtenerProductos() {
  const output = document.getElementById('productoOutput');
  fetchApi('/productos')
    .then(result => {
      output.innerHTML = `<pre>${JSON.stringify(result.data, null, 2)}</pre>`;
    });
}

// Inventario
function crearInventario() {
  const id_producto = document.getElementById('inventarioIdProducto').value;
  const cantidad = parseInt(document.getElementById('inventarioCantidad').value);
  const output = document.getElementById('inventarioOutput');

  fetchApi('/inventarios', 'POST', { id_producto, cantidad })
    .then(result => {
      output.innerHTML = `<pre>${JSON.stringify(result.data, null, 2)}</pre>`;
    });
}

function obtenerInventario() {
  const output = document.getElementById('inventarioOutput');
  fetchApi('/inventarios')
    .then(result => {
      output.innerHTML = `<pre>${JSON.stringify(result.data, null, 2)}</pre>`;
    });
}

function obtenerInventarioPorProducto() {
  const id_producto = prompt("Ingrese el ID del producto:");
  const output = document.getElementById('inventarioOutput');

  if (!id_producto) {
    output.innerHTML = "<pre>⚠️ ID del producto requerido</pre>";
    return;
  }

  fetchApi(`/inventarios/producto/${id_producto}`)
    .then(result => {
      output.innerHTML = `<pre>${JSON.stringify(result.data, null, 2)}</pre>`;
    });
}

function actualizarInventario(operacion) {
  const id_inventario = prompt("Ingrese el ID del inventario:");
  const cantidad = parseInt(document.getElementById('inventarioCantidad').value);
  const output = document.getElementById('inventarioOutput');

  if (!id_inventario || isNaN(cantidad)) {
    output.innerHTML = "<pre>ID o cantidad inválidos</pre>";
    return;
  }

  fetchApi(`/inventarios/${id_inventario}`, 'PUT', { operacion, cantidad })
    .then(result => {
      output.innerHTML = `<pre>${JSON.stringify(result.data, null, 2)}</pre>`;
    });
}