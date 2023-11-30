const express = require('express');
const app = express();
const port = 4000;
const connectDB = require('./db/dbConnection');
const User = require('./db/user');
const cors = require('cors');
// const {  Home } = require('./frontend/src/Home');

// app.set('view engine', 'ejs');
// app.set('home', path.join(Home, 'home'));

//Middleware for parsing JSON
app.use(express.json());

//Enable CORS
app.use(cors())

app.get('/signup',(req,res)=>{
    res.send("register");
})
//Registration
app.post('/signup',async(req,res) => {
    try{
        const {username,password} = req.body;
        console.log(req.body)
        const user = new User({username,password});
        await user.save();
        res.status(201).json({message:'Registration Successful'});
    }
    catch(error){
        console.log(req.body)
        res.status(300).json({error:'Registration failed'});
    }
})

//Login
app.post('/',async(req,res)=>{
    try{
        const {username,password} = req.body;
        const user = await User.findOne({username});

        if(!user){
            return res.status(401).json({error:'Invalid username or Password'});
        }

        else if(user.password !== password){
            return res.status(401).json({error:'Invalid username or password'});
        }
        else{

            res.status(200).json({message:'Login successful'})
            // res.sendFile(path.join(__dirname, 'path/to/home.html'));
            res.render("home");

        }

    }
    catch(error){
        res.status(500).json({error:'Login failed'})
    }
})

connectDB();

app.listen(port,()=> {
 console.log(`Server is listening on Post ${port}`)
});