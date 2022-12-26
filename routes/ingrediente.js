// const { response } = require('express');
const express = require('express');

const router = express.Router();

const ingr_ctrl = require('../controllers/ingrediente');

router.post('/ingrediente', ingr_ctrl.add_ingrediente);

router.delete('/ingrediente', ingr_ctrl.delete_ingrediente);
router.get('/ingrediente/:prezzo', ingr_ctrl.show_Prezzo);
router.patch('/ingrediente/:prezzo', ingr_ctrl.edit_prezzo_ingrediente);

module.exports = router;