const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const errorMiddleware = require('./middlewares/errors')


const app = express()

app.use(cors({
    origin:'*'
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


const todo = require('./Routes/todoRoutes')

app.use(morgan('dev'))

app.use('/api/v1',todo)


app.use(errorMiddleware)

module.exports = app