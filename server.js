import express from "express"
import exphbs from "express-handlebars"
import routes from "./routes/routes.js"
import dotenv from "dotenv"

// Load environment variables
dotenv.config()

// Define server object and port
const app   = express()
const port  = process.env.PORT

// Register hbs definition with Express
app.engine("hbs", exphbs.engine({
    extname: 'hbs',
    defaultLayout: 'main'
}))

// Set the template rendering engine
app.set("view engine", "hbs")
app.set("views", "./views")

// Connect router to server
app.use(`/`, routes)
app.use(express.static('public'));

// Start server
app.listen(port, () => {
    console.log(`Server running at 127.0.0.1:${port}`)
})