const express = require("express");
const app = express();
const port = 2000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const index = require("./routes/index.js");
const albuns = require("./routes/album-route.js");
const usuarios = require("./routes/usuario-route.js");
const photocards = require("./routes/pc-route.js");
const prodstroca = require("./routes/prodTroca-route.js");


app.use("/", index);
app.use("/albuns", albuns);
app.use("/usuarios", usuarios);
app.use("/photocards", photocards);
app.use("/prodstroca", prodstroca);


app.use((req, res) => {
    res.status(404).send({
      status: 404,
      error: "Not found",
    });
   }); 

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
   });
   