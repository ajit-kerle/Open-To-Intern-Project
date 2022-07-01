const express = require("express")
const bodyParser = require("body-parser")
const route = require("./Route/route")
const { default: mongoose } = require("mongoose")
const app = express()


app.use(bodyParser.json())

// mongodb+srv://ajitkerle:2R693j4kFokYqNZJ@cluster0.djs4ptj.mongodb.net/ajitkerle-DB/project2-DB
mongoose.connect("mongodb+srv://ajitkerle:2R693j4kFokYqNZJ@cluster0.djs4ptj.mongodb.net/project2-DB?retryWrites=true&w=majority",)

    .then(() => console.log("MongoDB is Connected."))
    .catch(err => console.log(err))

app.use('/', route)

app.listen(process.env.PORT || 3000, function () {
    console.log("Express is running on port " + (process.env.PORT || 3000))
})