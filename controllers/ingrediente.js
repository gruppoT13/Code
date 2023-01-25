
const Ingredienti = require('../models/ingrediente');

// POST '/ingrediente'
const add_ingrediente = (req, res) => {
    //check if the ingrediente name already exists in db
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
    
    let input_nome = req.params.nome;
    var query = { nome: input_nome };

    Ingredienti.deleteOne(query, (err, collection) => {
        if (err) {
            throw err;
        }
        else {
            console.log("Ingrediente deleted successfully");
            res.json({ message: "DELETE 1 ingrediente" });
        }

    });

}

// GET '/ingrediente.prezzo'
const show_Prezzo = (req, res, next) => {
    let input_nome = req.params.nome; //get the ingrediente name
    // console.log(nome);

    //find the specific ingrediente with that name
    Ingredienti.findOne({ nome: input_nome }, (err, data) => {
        if (err || !data) {
            return res.json({ message: "Ingrediente doesn't exist." });
        }
        else return res.json(data); //return the ingrediente object if found
    });
}


// PATCH '/ingrediente.prezzo'
const edit_prezzo_ingrediente = (req, res, next) => {
    let input_nome = req.params.nome; //get the ingrediente name
    let input_prezzo = req.params.prezzo; //get the ingrediente name
    // console.log(input_prezzo);

    //find the specific ingrediente with that name
    Ingredienti.findOne({ nome: input_nome }, (err, data) => {
        if (err || !data) {
            return res.json({ message: "Ingrediente doesn't exist." });
        }
        else{
            // prezzo: input_prezzo;

            return res.json(data); 
        } 
            
    });
}


// export controller functions
module.exports = { 
    add_ingrediente,
    delete_ingrediente,
    show_Prezzo,
    edit_prezzo_ingrediente
}
