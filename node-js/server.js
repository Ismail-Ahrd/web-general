//const fs=require('fs')
const fsPromises=require('fs').promises
const path=require('path')







/*
fs.readFile(path.join(__dirname,'files','file1.txt'),'utf8',(err,data)=>{
    if(err) throw err
    console.log(data)
})

fs.writeFile(path.join(__dirname,'files','file10.txt'),'Nice to meet you!',(err)=>{
    if(err) throw err
    console.log('write complited')
    fs.appendFile(path.join(__dirname,'files','file10.txt'),'\nYes it is!',(err)=>{
        if(err) throw err
        console.log('append complited')
        fs.rename(path.join(__dirname,'files','file10.txt'),path.join(__dirname,'files','file2.txt'),(err)=>{
            if(err) throw err
            console.log('rename complited')
        })
        
    })
    
})
*/

process.on('uncaughtException',err =>{
    console.error(`There was an uncaught error: ${err}`)
    process.exit(1)
})