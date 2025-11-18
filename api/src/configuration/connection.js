import mongoose from "mongoose";

export const connecDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
            .then(() => {
                console.log('Conexión exitosa a la base de datos');
            })
    } catch (error) {
        console.log('No se pudo conectar a la base de datos', error.message);
        process.exit(1);
    }
}