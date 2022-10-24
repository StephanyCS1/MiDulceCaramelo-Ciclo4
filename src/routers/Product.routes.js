const {Router} = require('express');
const routerProducto = Router();
const cntrlProducto = require('../controllers/ctrlProduc');

routerProducto.get('/', (req, res) =>{
    res.send('Funcionalidad correcta de la ruta de producto');
})

routerProducto.post('/new', cntrlProducto.newProd);
routerProducto.get('/list', cntrlProducto.listProd);
routerProducto.get('/list/:id', cntrlProducto.idProd);
routerProducto.put('/act/:id', cntrlProducto.actProd);
routerProducto.delete('/del/:id', cntrlProducto.delProd);


module.exports = routerProducto;
