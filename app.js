const express = require("express");
const app = express();
const dotenv = require("dotenv");

//Setting up config.env file variables
dotenv.config({ path: "./config/config.env" });

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(` server started on port ${process.env.PORT}`);
});
