const express = require("express");
// const phones = require('phones');
const phones = require("./phones.json")
const cors = require("cors");
const app = express();
app.use(cors());
const port = 5001;

app.get("/", (req, res) => { 
    res.send("Hello World phones go");
})

app.get("/phones", (req, res) => { 
    res.send(phones);
})
app.get("/phones/:id", (req, res) => { 
    const id = parseInt(req.params.id);
    console.log('i need data for id: ', id);
    const phone = phones.find(phone => phone.id === id) || {};
    res.send(phone);
})
app.listen(port, () => { 
    console.log(`Example app listening on port ${port}`);
}
)