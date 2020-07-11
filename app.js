const express = require('express');
const app = express();

let objetoPedorro = {}

function middlewareGlobal(req, res, next) {
    console.log("Me llego una petición ahhhh!");
    next();
}

app.use(middlewareGlobal);

function functionMiddleware(req, res, next) {
    let UA = req.get('User-Agent');
    console.log(UA + ' Anda de chismoso');
    next();
}

app.get('/', (req, res) => res.redirect('/obtener'));

app.get('/obtener', functionMiddleware, (req, res) => {
    res.json(objetoPedorro)
});

app.get('/meter',
    [(req,res, next) => {
        console.log(req.query);
        next();
    }],(req, res) => {
   const { query} = req;
   objetoPedorro = {
       ...objetoPedorro,
       ...query
   };
   res.json({ message: 'Se guardaron tus datos' });
});

app.listen(8080, () => console.log('Ya inicie perro'));