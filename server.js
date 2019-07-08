const express = require("express");

const PORT = process.env.PORT || 3000;
const app = express();

const routes = require("./routes");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(routes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));