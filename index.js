const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 3333;
const router = require("./routes/routes");
app.use("/", router);

const connectDB = require("./db");
connectDB();

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}.`);
});