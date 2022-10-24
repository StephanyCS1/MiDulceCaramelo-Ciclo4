const {Router} = require('express');
const routerCotizacion = Router();
const cntrlCotizacion = require('../controllers/ctrlCotiza');

routerCotizacion.get('/', (req, res) =>{
    res.send('Funcionalidad correcta de la ruta de cotizacióm');
})

routerCotizacion.post('/new', cntrlCotizacion.newCoti);
routerCotizacion.get('/list', cntrlCotizacion.listCoti);
routerCotizacion.get('/list/:id', cntrlCotizacion.idCoti);
routerCotizacion.put('/act/:id', cntrlCotizacion.actCoti);
routerCotizacion.delete('/del/:id', cntrlCotizacion.delCoti);


module.exports = routerCotizacion;
