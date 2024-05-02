// const express = require("express")
import express from 'express';

// const collection = require("./Mongo")
import collection from "./Mongo.js"
import cors from "cors";

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get("/", cors(), (req, res) => {

})

app.post("/sendData", async (req, res) => {
  const { name } = req.body
  try {
    await collection.insertMany([{ name: name }])

    const allData = await collection.find({})
    res.json(allData)
  }
  catch (e) {
    res.json("fail")
    console.log(e)
  }
})

app.listen(8000, () => {
  console.log("Connected")
})