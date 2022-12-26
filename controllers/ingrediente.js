
const Ingrediente = require('../models/ingrediente');

// POST '/ingrediente'
const add_ingrediente = async (req, res, next) => {

    const ingrediente = await Ingrediente.findOne({ 
        
        where: {
            nome: req.body.nome,
        },
    });
       
    // nuova risorsa
    if(!ingrediente) {
        const newIngrediente = new Ingrediente({
            nome: req.body.nome,
            prezzo: req.body.prezzo
        })

        newIngrediente.save((err, data) => {
            if(err) 
                return res.json({ Error: err });
            return res.json({message: "201 OK - Ingrediente inserito", data});   // inserire 201 OK
        })
    }
    else{
        if(err) 
            return res.json({ Error: err });
        return res.json({message: "Ingrediente already exists"})
    }
};

// DELETE '/ingrediente'
const delete_ingrediente = (req, res, next) => {
    /*
    Ingrediente.findOne({ nome: req.body.nome }, (err, data) => {
        if(data) {
            
        }
        else{
            
        }
    })   */
}

// GET '/ingrediente.prezzo'
const show_Prezzo = (req, res, next) => {
    console.log("Mostra Prezzo Ingrediente");
    res.json({ message: "GET ingrediente.prezzo" });
}


// PATCH '/ingrediente.prezzo'
const edit_prezzo_ingrediente = (req, res, next) => {
    console.log("Edit Prezzo Ingrediente");
    res.json({ message: "PATCH ingrediente.prezzo" });
}


// export controller functions
module.exports = { 
    add_ingrediente,
    delete_ingrediente,
    show_Prezzo,
    edit_prezzo_ingrediente
}