const mongoose = require("mongoose");

const ClienteSchema = new mongoose.Schema({
    conto: Number,
    nr_conto: Number
});

const Clienti = mongoose.model('Clienti', ClienteSchema);
module.export = Clienti;