const app = require('./app');
const port = 4000;
const mongoose = require('./src/DataBase/conn');
const rutaCoti = require('./src/routers/Cotiza.routes');
const rutaProd = require('./src/routers/Product.routes');
const rutaAdm = require('./src/routers/UserAdm.routes');
const cors = require('cors')

app.use(cors);

app.listen(port, ( ) => {
    console.log('Servicio corriendo en el puerto: ' + port);
})

app.get('/', (req, res) => {
    res.send('Api en funcionamiento');
})

//config rutas

app.use('/api/Cotizaciones', rutaCoti);
app.use('/api/Productos', rutaProd);
app.use('/api/UserAdmin', rutaAdm);
