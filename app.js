import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'


const app = express()
const __dirname=path.dirname(fileURLToPath(import.meta.url))
app.use(express.static(path.join(__dirname,'public')))
console.log(__dirname)

//app.get('/',(req,res)=>{
   // res.send('working Server :)')
//})
app.get('/post',(req,res)=>{
    res.send({'hello':'new'})
})




const port=process.env.PORT||3030;

app.listen(port,()=>{
    console.log('Server started at: '+port)
})