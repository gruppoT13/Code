const database = require('../server');
const { response } = require('express');
const express = require('express');

const router_1 = express.Router();

router_1.get('/gestore', async (req, res) => {
    database.collection("Gestori").find({}).toArray((err, res) => {
        if(err)
            console.log(err);
        response.send(result);
    })
});