const express = require('express');
const cors = require('cors');
// const monk = require('monk');
const Filter = require('bad-words');
const rateLimit = require("express-rate-limit");
const app = require(`./app`)
const connectDatabase =  require('./config/database')

// mongo

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://atraskiashasharma:<password>@cluster0.l9orw5w.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// mongo

const dotenv = require('dotenv');

//setting up config file
dotenv.config({path: 'server/config/config.env'})

// connecting to database
connectDatabase();

app.listen(process.env.PORT, () =>{
  console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})



 



const app = express();

// const db = monk(process.env.NODE_ENV || 'localhost/frontend');
// //const atr = db.get('atraski');
const filter = new Filter();

app.use(cors());
app.use(express.json());
app.use(rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // maximum of 100 requests per windowMs
  message: 'Too many requests, please try again later.',
}));


// app.get('/',(req, res) =>{
//   if(isValidAtr(req.body)){
//     //insert into db...
//   }else {
//     res.json({
//       message: 'hey!'
//     });
//   }
// });

app.post('/frontend', (req, res) =>{
    console.log(req.body);
});

app.listen(5000, () => {
    console.log('Listening on http://localhost:5000');
});