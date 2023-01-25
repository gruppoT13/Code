const mongoose = require("mongoose");

const Ingrediente_Schema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
    },
    prezzo: {
        type: Number,
        default: 0,
    }
});

const Ingredienti = mongoose.model('Ingredienti', Ingrediente_Schema);
module.export = Ingredienti;
