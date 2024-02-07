
const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require('mongoose')
const dotenv = require("dotenv")



dotenv.config();
const port = process.env.PORT || 8000;



const app = express()
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect(process.env.MONG_URL);
const db = mongoose.connection
db.on('error', () => {
    console.log("Error in connecting to database");
})

db.once('open', () => {
    console.log("Database connection successful")
})

app.post("/signup", async (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;
  
  const data = {
    "name": name,
    "email": email,
    "password": password,
  }

  const existingUser = await db.collection("users").findOne({email: email})

  if (!existingUser) {
    
    db.collection("users").insertOne(data, (err, collection) => {
    
    if (err) {
      throw err;
    }
    console.log("Record Inserted successfully");
    })
    // res.set("Registration successful!");
  return res.status(200).redirect("login.html");
  }

  else {
   
    // console.log("User already exists");
    return res.status(409).send({Error:'User already exists'});
  }


});


app.post("/login", async (req, res) => {

  const email = req.body.email;
  const pass = req.body.password;

   db.collection("users").findOne({ email: email }, function (err, found) {
    if (!err) {
      if (found) {
        if (found.password == pass) {
          return res.status(200).redirect("home.html");
        }
        else {
          res.send({ Error:'Incorrect password'})
        }
      }
      else {
        res.send({ Error:"You've not been registered yet"})
      }
    }
    else {
      res.status(500).send(err)
    }
  });

  
});

app.get("/", (req, res) => {
  //   res.set({
  //       "Allow-access-Allow-origin": '*'
  // })
  res.json("Server ie connected")
  // res.set("public/signup.html")
  return res.redirect("index.html")
}).listen(port);

console.log(`server is running on port ${port}`)