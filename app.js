const express = require('express')
const app = express()

const PORT = process.env.PORT || 4000

//Serving the app on the specified port
app.listen(PORT)