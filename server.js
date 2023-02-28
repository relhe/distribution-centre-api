const express = require('express');
const clientRoutes = require('./src/clients/routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/clients', clientRoutes);

app.listen(port, () => {
    console.log(`App is listening at port :${port}`);
});
