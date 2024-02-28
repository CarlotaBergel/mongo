const mongoose = require("mongoose")

const photosSchema = new mongoose.Schema({
    user:{
      type: String,
    },
    url:{
      type: String,
    },
    title:{
      type: String,
    },
    description:{
      type: String,
    }
  });
  
  module.exports = mongoose.model("Photos", photosSchema);