import express from 'express'



const app = express()
const port=process.env.PORT||3030;





app.get('/',(req,res)=>{
    res.send(`not found`)
})
app.post('/post',(req,res)=>{
    res.send({'hello':'new'})
})
app.get('/',(req,res)=>{
    res.send(`not found`)
})


app.listen(port,()=>{
    console.log('Server started at: '+port)
})