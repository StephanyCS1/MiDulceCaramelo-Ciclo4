const {Router} = require('express');
const routerUserAdmin = Router();
const cntrlUserAdmin = require('../controllers/ctrlUserAdm');

routerUserAdmin.get('/', (req, res) =>{
    res.send('Funcionalidad correcta de la ruta de user admin');
})

routerUserAdmin.post('/new', cntrlUserAdmin.newAdmin);
routerUserAdmin.get('/list', cntrlUserAdmin.listAdmin);
routerUserAdmin.get('/list/:id', cntrlUserAdmin.idAdmin);
routerUserAdmin.put('/act/:id', cntrlUserAdmin.actAdmin);
routerUserAdmin.delete('/del/:id', cntrlUserAdmin.delAdmin);


module.exports = routerUserAdmin;