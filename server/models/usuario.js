// Esquema con el que va a trabajar la base de datos

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator'); // Nos ayuda con los errores de campo unico

let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    mesaage: '{VALUE} no es un rol valido'
};


let Schema = mongoose.Schema;


let usuarioSchema = new Schema({

    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        unique: true, //hay que indicar que es un campo unico para que lo reconozca uniqueValidator
        required: [true, 'El correo es necesario']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es necesario']
    },
    img: {
        type: String,
        required: false
    },
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: rolesValidos
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }

});

// Regresa el objeto del usuario sin el password
usuarioSchema.methods.toJSON = function() {

    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;

};

// Aqui indicamos como tratar el error y podemos agregar un mensaje
usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser unico' });


module.exports = mongoose.model('Usuario', usuarioSchema); // Lo exportamos para usarlo fuera donde lo llamemos