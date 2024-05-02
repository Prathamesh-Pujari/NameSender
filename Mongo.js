//const mongoose = require("mongoose")
import mongoose from "mongoose"
mongoose.connect("mongodb://127.0.0.1:27017/nameSender")
  .then(() => {
    console.log("Mongo Connected")
  })
  .catch(() => {
    console.log("Mongo Error")
  })

const newSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})
const collection = mongoose.model("collection", newSchema)
// module.exports = collection
export default collection;