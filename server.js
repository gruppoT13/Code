const dotenv = require('dotenv').config();
const express = require('express');
const app = express();

const database = require ( 'mongoose' );
database.set('strictQuery', true);
database.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if(err) return console.log("Error: ", err);
        console.log("MongoDB Connection -- Ready state is:", database.connection.readyState); 
    }
);


const routes = require('./routes/ingrediente');
app.use('/', routes);



const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listen on port ' + 
    listener.address().port)
})

module.export =  database;
