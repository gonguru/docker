const express = require('express');
const app = express();

let objetoPedorro = {}

app.get('/', (req, res) => res.redirect('/obtener'));

app.get('/obtener', (req, res) => {
    res.json(objetoPedorro)
});

app.get('/meter', (req, res) => {
   const { query} = req;
   objetoPedorro = {
       ...objetoPedorro,
       ...query
   };
   res.json({ message: 'Se guardaron tus datos' });
});

app.listen(8080, () => console.log('Ya inicie perro'));