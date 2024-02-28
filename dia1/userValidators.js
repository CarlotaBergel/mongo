const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    login:{
      type: String,
    },password: {
      type: String,
      require: true,
      validate: [
        function (password){
          return password.length >= 6;
        },
        "Minimo 6 caracteres"],
        select: false
    },
});

userSchema.pre("save", function(next){
    if (this.password >= 6){
        console.log("Correcto")
        next();
    }else{
        console.log("No es valido");
    }
})

module.exports = mongoose.model("UserValidation", userSchema);