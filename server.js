const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get('/', (req, res) => {
  //res.send('Hello World!');
  res.render('index.ejs', {
    numberOfIterations: 50
  });
});

app.get("/coords/:loc", (req, res) => {
   const loc = req.params.loc;
   res.send(loc);
});

app.use(express.static("public"))


const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

