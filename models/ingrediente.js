const mongoose = require("mongoose");

const IngredienteSchema = new mongoose.Schema({
    nome: String,
    prezzo: Number
    // permessi: Boolean
});

const Ingredienti = mongoose.model('Ingredienti', IngredienteSchema);
module.export = Ingredienti;