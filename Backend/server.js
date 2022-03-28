const express = require("express");

const app = express();

const notify = require("./routes/api/notification");

app.use("/api/notification",notify);

const PORT = process.env.PORT | 5000;

app.listen(PORT,()=>console.log('started'));