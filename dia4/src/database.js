let mongoose = require("mongoose");

mongoose.connect('mongodb+srv://user:admin@codenotch.ulla6qk.mongodb.net/codenoch')
.then((db)=>{
    console.log("database connected on " + db.connection.host)
})
.catch((error)=> {
    console.log(error)
})

module.exports = {mongoose};