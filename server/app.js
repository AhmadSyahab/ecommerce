const app = require('express')();
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()


mongoose.connect(process.env.DB) 
app.use(cors())


const Product = require('./routers/product')
const Customer = require('./routers/customer')
const Transaction = require('./routers/transaction')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/product', Product);
// app.use('/customer', Customer);
app.use('/transaction', Transaction);	

app.use(morgan('dev'));

app.listen(process.env.PORT || 3000)