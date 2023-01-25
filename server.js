const dotenv = require('dotenv').config();
const express = require('express');
const app = express();

const routes = require('./routes/ingrediente');
const mongoose = require ( 'mongoose' );
mongoose.set('strictQuery', true);

app.use(express.json());
app.use('/', routes);

// Connessione al DataBase
try{
    mongoose.connect(
        process.env.MONGODB_URI,
        { useNewUrlParser: true, useUnifiedTopology: true },
        (err) => {
            if(err) return console.log("Error: ", err);
            console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState); 
        }
    );
} catch (e){
    console.log("DB not connected")
}

// listener Porta
const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listen on port ' + 
    listener.address().port)
})
