const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 3333;
const router = require("./routes/routes");
app.use("/", router);
app.use(cors());

const connectDB = require("./db");
connectDB();

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}.`);
});