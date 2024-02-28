let mongoose = require("mongoose");
let User = require("./user");
let Profile = require("./profile");
let Credentials = require("./credentials");
let userValidators = require("./userValidators")

mongoose.connect('mongodb+srv://user:admin@codenotch.ulla6qk.mongodb.net/codenoch');

let userNew = new User({
    login: "CCarlota",
    password: "1"
});

userNew.save().then(res =>{
    console.log(res);
}).catch(err =>{
    console.log(err);
});

let profileNew = new Profile({
    name: "Carlota",
    surname: "bergel",
    dateOfBirth: "02/06/1999",
    comments: "bla bla bla bla",
    rol: "estudiante"
});

profileNew.save().then ((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});

let credentialsNew = new Credentials({
    address: "Calle santiago, 1",
    phone: 657232980,
    email: "carlota@gmail.com"
});

credentialsNew.save().then ((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});

let validaciones = new userValidators({
    login: "Carlota",
    password: "1"
});

validaciones.save().then ((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});