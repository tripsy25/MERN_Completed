const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


require("dotenv").config();

const DB = process.env.DATABASE;
// const Port = process.env.PORT;

// const env = require('./.env');

// require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

//environment variable
// require('dotenv').config({ path: '.env' });

// debugger
// var uri; // Define outside
// if(process.env.ATLAS_URI){
//   uri = process.env.ATLAS_URI; // Assign inside the block
//   }
// const uri = process.env.ATLAS_URI;

// var url = "mongodb+srv://tripsy25:priyadi123@cluster0.lwpkrde.mongodb.
// net/?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    usenewurlparser: true,
    useunifiedtopology: true,
  })
  .then(() => {
    console.log("Successfully connected ");
  })
  .catch((error) => {
    console.log(`can not connect to database, ${error}`);
  });
console.log("atlas variable", DB);
// mongoose.connect(uri,
// {  useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true }
// );

// mongoose.connect(url, function(err, db) {
//     if (err) throw err;
//         console.log("Database created!");
//         db.close();
// });

// const connection = mongoose.connection;
// connection.once('open', () => {
//     console.log(`MongoDB database connection established successfully`);
// })

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
