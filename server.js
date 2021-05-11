const express = require("express");
const app = express();
var cors = require('cors')
const connectDB = require('./db')
app.use(cors())
const todo = require("./routes/todo.routes")

app.use(express.json())
connectDB();


app.use('/api/todo',todo )

const PORT = 5000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));
