const express= require("express")
const articleRouter = require('./routes/articles')
const app=express()


app.set('view engine', 'ejs')   //view engine is gonna convert the ejs code to html

app.use('/articles',articleRouter)

app.get('/',(req,res) =>{
    //res.send("Hello world")
    res.render('index')
})

app.listen(5000)