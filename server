const express = require('express');
const { LocalStorage } = require('node-localstorage');
const path = require('path');
const cors = require('cors');


const localStorage = new LocalStorage(path.join(__dirname, './scratch'));
const app = express();




app.use(cors());


app.use(express.json());


app.post('/item', (req, res) => {
    const { key, value } = req.body;
    if (key && value !== undefined) {


            let currVal = localStorage.getItem(key);
            if (currVal) {
                let parsedVal = JSON.parse(currVal);
                if (Array.isArray(parsedVal)) {
                    parsedVal.push(value);
                } else {
                    parsedVal = [parsedVal, value];
                }
                localStorage.setItem(key, JSON.stringify(parsedVal));
            } else {
                localStorage.setItem(key, JSON.stringify([value]));
            }
            res.status(201).send({ key, value });
    } else {
        console.error('Bad request: Key or value is missing');
        res.status(400).send({ error: 'Key and value are required' });
    }
});


app.get('/item/:key', (req, res) => {
    const key = req.params.key;


        const value = localStorage.getItem(key);
        if (value) {
            res.status(200).send({ key, value: JSON.parse(value) });
        } else {
            res.status(404).send({ error: 'Item not found' });
        }


});




// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
