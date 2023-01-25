
const Ingredienti = require('../models/ingrediente');

// POST '/ingrediente'
const add_ingrediente = (req, res) => {
    //check if the tea name already exists in db
    Ingredienti.findOne({ nome: req.body.nome }, (err, data) => {
        //if ingr. not in db, add it
        if (!data) {
            //create a new ingr. object using the Ingrediente model and req.body
            const newIngrediente = new Ingredienti({
                nome: req.body.nome,
                prezzo: req.body.prezzo,
            })

            // save this object to database
            newIngrediente.save((err, data) => {
                if (err) return res.json({ Error: err });
                return res.json(data);
            })
            //if there's an error or the ingr. is in db, return a message         
        } else {
            if (err) return res.json(`Something went wrong, please try again. ${err}`);
            return res.json({ message: "Ingrediente already exists" });
        }
    })
};

// DELETE '/ingrediente'

const delete_ingrediente = (req, res, next) => {
    Ingrediente.findOne({ nome: req.body.nome }, (err, data) => {
        if(data) {
            
        }
        else{
            
        }
    })

}

// GET '/ingrediente.prezzo'
const show_Prezzo = (req, res, next) => {
    // Ingredienti.find({}, (err, data)=>{
    //     if (err){
    //         return res.json({Error: err});
    //     }
    //     return res.json(data);
    // })
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
