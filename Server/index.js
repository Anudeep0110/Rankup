const express = require('express');
const bodyparser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql')
const fs = require('fs')
const path = require('path')
const multer = require('multer')

const app = express()
app.use(bodyparser.json())
app.use(cors())
app.use('./Assets/',express.static('../RANKUP/src/Assets'))

app.listen(8000,() => console.log('Listening on port 8000'))

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Aytas@111_rawse@111',
    database: 'rankup',
})

con.connect((err) => {
    if(err) throw err;
    else console.log('Connected');
})

var storage = multer.diskStorage({
    destination: (req,file,callBack) => {
        callBack(null, '../src/Assets')
    },
    filename: (req,file,callBack) => {
        callBack(null, 'profile'+path.extname(file.originalname))
    }
})

var upload = multer({
    storage: storage
})

app.post('/signup',upload.single('img'),(req,res) => {
    console.log(req.body)
    console.log(req.file)
    if(!req.file){
        console.log("Error")
    }
    else{
    var fname = req.body.fname
    var lname = req.body.lname
    var uname = req.body.uname
    var mail = req.body.email
    var join = req.body.join
    var inter1 = req.body.inter1
    var inter2 = req.body.inter2
    var inter3 = req.body.inter3
    var link = req.body.linkin
    var git = req.body.git
    var pwd = req.body.pwd
    var cfpwd = req.body.cfpwd
    var img = fs.readFileSync(req.file.path)
    con.query("Insert into Signup set ?",{
        profile:img,
        FirstName:fname,
        LastName:lname,
        UserName:uname,
        Email:mail,
        Iam:join,
        Interest1:inter1,
        Interest2:inter2,
        Interest3:inter3,
        Rank:0,
        Attempted:0,
        Posted:0,
        LinkedIN:link,
        GitHub:git,
        Password:pwd,
        Cfpassword:cfpwd
    },(err,result) => {
        if(err){
            console.log(err)
        }else{
            console.log(result)
        }
    })
    }
    
})


app.post('/profile',(req,res) => {
    con.query('Select * from SignUp where UserName = (select username from login limit 1)',(err,result) => {
        if(err) {
            console.log(err)
        }
        fs.writeFileSync('../src/Assets/retrieve.jpg',result[0].profile)
        console.log(result)
        res.json(result)
    })
})



app.post('/login',(req,res) => {
    var name = req.body.sendinguname
    var pwd  = req.body.sendingpwd
    console.log(name , pwd)
            con.query('select Username,Password,Profile from Signup where Username = ? and Password = ?',[name,pwd],(err,result1)=> {
                console.log(result1)
                if(err){
                    console.log('ERROR')
                }
                if(result1.length<=0){
                    res.send({msg:"Invalid Username or Password"}) 
                }
                else{
                    console.log(result1[0].Password)
                        fs.writeFileSync('../src/Assets/retrieve.jpg',result1[0].Profile)
                    if(result1[0].Password===pwd){
                        con.query('update Login set Username= ? ',[name],(err,result) => {
                            res.send({msg:'1'})  
                        })
                    } 
                    else{
                        res.send({msg:"Invalid Username or Password"})  
                    } 
                }
            })             
    })  

app.post('/qod',(req,res)=> {
    con.query("select * from login where date(logindate) = date(now())",(err,result) => {
        console.log(result);
        if(result.length>0){
            console.log("HI IF")
                con.query("select * from qod",(err,result) => {
                    console.log(result);
                    res.json(result)
                })
            }else if(result.length===0){
                console.log("HI")
            con.query("update login set logindate = current_date()",(err,result) => {
                console.log(result)
            })
            con.query('drop table qod',(err,result) => {
                console.log(result)
            })
            con.query("create table qod as Select * from Questions group by Qtype order by rand() limit 5",(err,result) => {
                console.log(result)
            })
            con.query("select * from qod",(err,result) => {
                console.log(result)
                res.json(result)
            })
        }     
    })  
})


app.post('/ans',(req,res) => {
    con.query("SELECT Answer from qod",(err,result) => {
        res.json(result)
    })
})

app.post('/hqs',(req,res) => {
    con.query("Insert into Questions set ? ",{
        Qtype: req.body.topic,
        Question : req.body.question,
        Option1:req.body.option1,
        Option2:req.body.option2,
        Option3:req.body.option3,
        Option4:req.body.option4,
        Answer:req.body.ans
    },(err,result) => {
        if(err) {
            console.log("Error")
        }
        else{
            res.send(result)
        }
    })
})