const express    = require("express");
const bodyParser = require( "body-parser");
const mongoose   = require( "mongoose");
const cors       = require( "cors");
//social media button;
const authRoute = require( "./Auth");
const session = require( "express-session");
const {
    allExports
} = require( "npm_login_test");
const dotenv = require( "dotenv");


const app = express();
dotenv.config()

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

//social media
app.use(session());
app.use(allExports.app_Initialize());
app.use(allExports.app_Session());


app.use(cors());

app.use("/auth", authRoute);


const CONNECTION_URL = process.env.CLIENT_DB_URL;
const PORT = process.env.PORT || 5000;

const social_config = {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET

}
const social_URL = {
    CLIENT_Google_URL: process.env.CLIENT_Google_URL,
}
allExports.clientURL_config(social_URL)
allExports.socialMedia_Config(social_config)


mongoose.connect("mongodb://localhost:27017/auth",{
    useNewUrlParser:true
}).then(
    ()=> console.log('DB connected')
)

app.listen(5000,()=> console.log("server is started"))
// mongoose
//     .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() =>
//         app.listen(PORT, () =>
//             console.log(`Server Running on Port: http://localhost:${PORT}`)
//         )
//     )
//     .catch((error) => console.log(`${error} did not connect`));

// mongoose.set("useFindAndModify", false);




// const express = require('express');
// const  RegUser = require('./model');
// const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');
// const middleware = require('./middleware')
// const cors = require('cors')
// const { JsonWebTokenError } = require('jsonwebtoken');
// const authRoute = require("./Auth");
// const session = require("express-session");
// const {allExports} = require( "npm_login_test");
// const dotenv = require("dotenv");
 

// const app = express();
// mongoose.connect("mongodb://localhost:27017/auth",{
//     useNewUrlParser:true
// }).then(
//     ()=> console.log('DB connected')
// )
// app.use(express.json());
// app.use(cors({origin:"*"}))
// dotenv.config()
// app.use("/auth", authRoute);
// app.use(session({ secret: 'melody hensley is my spirit animal' }));
//    app.use(allExports.app_Initialize());
//    app.use(allExports.app_Session());

//    const social_config = {
//     GOOGLE_CLIENT_ID:process.env.GOOGLE_CLIENT_ID,
//     GOOGLE_CLIENT_SECRET:process.env.GOOGLE_CLIENT_SECRET,
   
//    }
//   const social_URL={
//     CLIENT_Google_URL:process.env.CLIENT_Google_URL,
//    }
 
 
//    allExports.clientURL_config(social_URL)
//    allExports.socialMedia_Config(social_config)

// app.post('/register',async(req,res) => {
//     try{
//         const {username,email,password,confirmpassword} = req.body;
//         let exist = await RegUser.findOne({email:email})
//         if(exist){
//             return res.status(400).send('user Already exists')
//         }
//         if(password !== confirmpassword){
//             return res.status(400).send('password not matching');
//         }
//         let newUser = new RegUser({
//             username,
//             email,
//             password,
//             confirmpassword
//         })
//       await newUser.save();
//       res.status(200).send('Register successfully')
//     }catch(err){
//         console.log(err)
//         return res.status(500).send('Internel server')
//     }
// })

// app.post('/login',async(req,res) => {
//     try{
//         const {email,password} = req.body;
               
//         let exist = await RegUser.findOne({email:email});
//         if(!exist){
//             return res.status(400).send('user not found')
//         }
//         if(exist.password !== password){
//             return res.status(400).send("invalid credentials");
//         }
//         let payload = {
//             user:{
//                 id: exist.id
//             }
//         }
//         jwt.sign(payload,'jwtSecret',{expiresIn:3600000},
//             (err,token) =>{
//                 if(err) throw err;
//                 return res.json({token})
//             })
//     }
//     catch(err){
//         console.log(err);
//         return res.status(500).send('server error')
//     }
// })

// app.get('/myprofile',middleware,async(req,res) => {
//     try{
//         let exist = await RegUser.findById(req.user.id);
//         if(!exist){
//             return res.status(400).send("user not found");
//         }
//         res.json(exist);
         
//     }
//     catch(err){
//         console.log(err);
//         return res.status(500).send('server error')
//     }
// })
// app.listen(5000,()=> console.log("server is started"))