import mongoose from "mongoose"
import express from "express"
import "dotenv/config"
import modeloUsuario from "./modelos/Usuario.js";

const app = express();
app.use(express.json());

try {
    await mongoose.connect(process.env.connection).then(() => console.log("conectado"))
    app.listen(3000, () => {
        console.log("servidor corriendo");
    })
} catch (error) {
    console.log(error);
}
app.get("/", function (req, res) {
    res.send('inicio');
})

app.get('/api/users', async (req, res) => {
    try {
        const users = await modeloUsuario.find({

        })
        res.status(200).json({ message: "lista de usuarios", users })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message ?? "error de servidor" })
    }
})

app.post('/api/newuser', async (req, res) => {
    const { body } = req;
    try {
        console.log(body);
        const newUser = await modeloUsuario.create({
            ...body
        })
        res.status(200).json({ message: "usuario creado exitosamente ", newUser })
    } catch (error) {
        res.status(400).json({ message: error.message ?? "error de servidor" })
    }
});

