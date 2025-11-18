import app from './app.js';



const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello world!')
})

// rutas


app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
})