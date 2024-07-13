const express = require('express')
const app = express()

app.get("/", (req,resp) => {
    resp.send("App is working fine.")
})

app.listen(5000)