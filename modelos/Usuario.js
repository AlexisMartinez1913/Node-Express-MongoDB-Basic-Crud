import mongoose from "mongoose";

const esquema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "este campo es requerido"],
        trim: true,
        minlength: 5,
        maxlength: [55, "longitud demasiada larga"]
    },
    edad: {
        type: Number,
        required: [true, "este campo es requerido"],
        min: [1, "debe tener mas de un año"],
        max: [99, "debe tener maximo 99 años"],
        trim: true
    },
    familia: {
        type: Array,
        default: []
    }
},
    {
        timestamps: true
    }
)

let modeloUsuario;
try {
    modeloUsuario = mongoose.model("Usuario");
} catch (error) {
    modeloUsuario = mongoose.model("Usuario", esquema);
}

export default modeloUsuario;