require('dotenv').config();
const express = require('express')
const cors = require('cors')
// require('./database')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json());
app.use(cors());

//users rutes
app.use("/api/example", require('./routes/example.routes'));

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
