require('dotenv').config()    /* ye dot enve -- npmjs.com/package/dotenv se aaya hai */

const express = require('express')  /* This is required module syntax ---File is a CommonJS module; it may be converted to an ES module.ts(80001)*/
/* import express from "express" */   /* This is style of javascript */
const app = express()                   /* app is just like Math.rendom , Math.add isi ki tarah hota hai. */
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('debatewithrishav')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login Debatewithrishav</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Debate with rishav</h2>')
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})