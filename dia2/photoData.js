let mongoose = require ("mongoose");
let Photos = require ("./photoModel");

mongoose.connect('mongodb+srv://user:admin@codenotch.ulla6qk.mongodb.net/codenoch');

let users = [
    { 
        user: "Josemary",
        url: "https://i.pinimg.com/236x/60/8a/7d/608a7d2de0cf6898c3869b116c4231be.jpg",
        title: "Foto Josemary",
        description: "Foto Josemary"
    },
    { 
        user: "Francisca",
        url: "https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&w=1000",
        title: "Francisca",
        description: "Un parecido con Shrek"
    },
];

// insertar usuarios

// Photos.insertMany(users)
// .then(function(docs) {
//     console.log("Usuarios añadidos");
// })
// .catch(function(err) {
//     console.error(err);
// });


// Buscar foto
// const findPhotos = () => {
//     return Photos.find({ user: "Josemary" }).exec();
// };
  
// findPhotos()
// .then((photos) => {
//     console.log(photos);
// })
// .catch((err) => {
//     console.log(err);
// });

// Modificar foto

// let NewDescription;

// Photos.updateOne({title: "Francisca" }, {description: NewDescription })
// .then((result) => {
//     console.log("se modifico el titulo");
//     console.log(result);
// })
// .catch((err) => {
//     console.error(err);
// });


// Eliminar foto

Photos.deleteOne({user: "Josemary"}, {title: "Foto Josemary"})
.then(function(result) {
    console.log("Foto eliminada");
})
.catch(function(err) {
    console .error(err);
});

Photos.deleteMany({user: "Josemary" })
.then(function(result) {
    console.log("Fotos elimanadas");
})
.catch(function(err) {
    console.error(err);
});