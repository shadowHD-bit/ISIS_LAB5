const express = require("express");
const path = require("path");

const PORT = 8080;

// приложение
const app = express();

app.use(express.static(__dirname + "/public"));

app.set("views", path.join(__dirname, "public/views"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", {
    text: "Hello World and Docker!",
    lorem:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quae, neque ab ratione cupiditate, officiis dignissimos sint accusamus assumenda atque consequuntur praesentium eius nulla nisi dolore numquam temporibus, tempore quibusdam!",
  });
});

app.get('/good-request',(req,res)=> { 
  res.status(200).json({}); 
});
app.get('/bad-request',(req,res)=> { 
  res.status(500).send('Something went wrong! Nothing works...'); 
});

app.listen(PORT, () => {
  console.log(`Application running...`);
});
