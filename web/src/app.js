const express=require('express')
const path=require('path')

const port=process.env.PORT || 3000
const app = express();

app.listen(port,()=>{
    console.log('server is running on',port)
})

