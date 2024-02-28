const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://user:admin@codenotch.ulla6qk.mongodb.net/codenoch');

const teachersSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    groups: [String],
});
const subjectsSchema = new mongoose.Schema({
    title: String,
    teachers: [teachersSchema]
});
const marksSchema = new mongoose.Schema({
    date: Date,
    mark: Number,
    subjects: [subjectsSchema]
});
const studentsSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    marks: [marksSchema]
});


let Teachers = mongoose.model("Teachers", teachersSchema);
let Subjects = mongoose.model("Subjects", subjectsSchema);
let Marks = mongoose.model("Marks", marksSchema);
let Students = mongoose.model("Students", studentsSchema);


let prof1 =  new Teachers({
    firstName: "Pepe",
    lastName: "Lopez",
    groups: ["a", "b"]
})
let prof2 = new Teachers({
    firstName: "Julio",
    lastName: "Marquez",
    groups: ["c", "d"]
})
let prof3 = new Teachers({
    firstName: "Joselu",
    lastName: "Ortega",
    groups: ["e", "f"]
})
let prof4 = new Teachers({
    firstName: "Chechu",
    lastName: "Gil",
    groups: ["g", "h"]
})


let asig1 = new Subjects({
    title: "Lenguaje de marcas", 
    teachers: [prof1]
})
let asig2 = new Subjects({
    title: "Fol", 
    teachers: [prof2]
})
let asig3 = new Subjects({
    title: "Ciencies", 
    teachers: [prof3]
})
let asig4 = new Subjects({
    title: "Java", 
    teachers: [prof4]
})

let nota1 = new Marks({
    date: "2024-1-05", 
    mark: 8, 
    subjects: asig1
})
let nota2 = new Marks({
    date: "2023-2-06", 
    mark: 5, 
    subjects: asig2
})
let nota3 = new Marks({
    date: "2022-11-5", 
    mark: 3, 
    subjects: asig3
})
let nota4 = new Marks({
    date: "2021-12-30",
    mark: 10, 
    subjects: asig4
})

let estudiante1 = new Students({
    firstName: "paco", 
    lastName: "Jimenez", 
    marks: [nota1, nota2]
})
let estudiante2 = new Students({
    firstName: "Elena", 
    lastName: "Suarez",
    marks: [nota2, nota4]
})
let estudiante3 = new Students({
    firstName: "Jonathan",
    lastName: "ortega",
    marks: [nota3, nota2]
})
let estudiante4 = new Students({
    firstName: "nyan",
    lastName: "Bergel",
    marks: [nota1, nota2]
})



// Teachers.insertMany([prof1, prof2, prof3, prof4])
// .then(function(docs) {
//     console.log("profes añadidos");
// })
// .catch(function(err) {
//     console.error(err);
// });

// Subjects.insertMany([asig1, asig2, asig3, asig4])
// .then(function(docs) {
//     console.log("asignaturas añadidas");
// })
// .catch(function(err) {
//     console.error(err);
// });

// Students.insertMany([estudiante1, estudiante2, estudiante3, estudiante4])
// .then(function(docs) {
//     console.log("Estudiantes añadidos");
// })
// .catch(function(err) {
//     console.error(err);
// });

// Marks.insertMany([nota1, nota2, nota3, nota4])
// .then((docs) => {
//     console.log("notas añadidas");
// })
// .catch((err) => {
//     console.error(err);
// });




Students.findOne({ firstName: "Nyan" })
.then((students) => {
    students.marks.forEach((notas) => {
        console.log("notas de nyan" + notas);
    });

    students.marks.forEach((mark) => {
        console.log("asignaturas de nyan" + mark);
    });

    students.marks.forEach((mark) => { 
      mark.subjects.teachers.forEach((teacher) => {
        console.log("los profesores de nyan"+ teacher);
      });
    });
})
.catch((err) => {
    console.log(err);
});
