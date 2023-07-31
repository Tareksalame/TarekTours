const express = require('express')
const app = express()
const bp = require('body-parser')
const db = require('mongoose')
require('dotenv').config();

const dbURI = process.env.MONGODB_URI;
app.use(express.static('pages'))
app.use(bp.urlencoded({extended: false}));
app.use(bp.json());
db.connect(dbURI);

const userSchema = db.Schema({
    fullName:String,
    email:String,
    makdema:String,
    phoneNumber:Number,
    selector:String,
    message:String
})
const userModel = db.model('user',userSchema)
app.get('/',(req,res)=>
{
    res.sendFile(__dirname + '/pages/index.html')
})
app.get('/SignIn' , (req,res)=>
{
    res.sendFile(__dirname + '/pages/SignInPage.html')
})
app.post('/admin', (req,res)=>
{
    let userName = req.body.userName
    let password = req.body.password;
    if(userName == 'admin' && password=='barmorad71!')
    {
        res.json('admin')
    }
})
// app.get('/delete' , async(req,res) =>
// {
//     await userModel.deleteMany()
//     res.send('ok')
// })
app.post('/register' , async(req,res)=>
{
    let fullName = req.body.fullName
    let email = req.body.email
    let makdema = req.body.makdema
    let phoneNumber = req.body.phoneNumber
    let selector = req.body.selector
    let message = req.body.message
    let insert = await userModel.insertMany({
        fullName:fullName,
        email:email,
        makdema:makdema,
        phoneNumber:phoneNumber,
        selector:selector,
        message:message
    })
    console.log(insert);
    if(insert != null)
    {
        res.json(insert)
    }
})


app.listen(process.env.PORT || 4500, () => console.log('Server running on port', process.env.PORT || 4500));



