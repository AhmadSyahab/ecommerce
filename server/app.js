const app = require('express')();
const morgan = require('morgan')
const MongoClient = require('mongodb').MongoClient

const cors = require('cors')
 
app.use(cors())


const Product = require('./routers/product')
const Customer = require('./routers/customer')
const Transaction = require('./routers/transaction')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const url = 'mongodb://localhost:27017/library';


app.use('/product', Product);
// app.use('/customer', Customer);
app.use('/transaction', Transaction);

app.use(morgan('dev'));

app.listen(3000)