const express = require("express");
const bodyParser = require("body-parser");

const app = express();


//делаем наш парсинг в формате json
app.use(bodyParser.json());

// парсит запросы  по типу: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//  простой response - request
app.get("/", (req, res) => {
  res.json({ message: "Это стартовая страница нашего приложения" });
});

app.get("/news", (req,res) =>{
	res.json({message:"hello world"});
})

// set port, listen for requests
app.listen(3001, () => {
  console.log("Сервер запущен на 3001 порту");
});