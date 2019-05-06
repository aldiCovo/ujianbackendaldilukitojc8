const express = require("express");

const movies = require("./routers/movies");
const movcat = require("./routers/movcat");
const categories = require("./routers/categories");

const app = express();
const port = 2040;

app.use(express.json());

app.use(movies);
app.use(movcat);
app.use(categories);

app.listen(port, () => {
  console.log("Running at ", port);
});
