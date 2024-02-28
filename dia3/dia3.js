const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://user:admin@codenotch.ulla6qk.mongodb.net/codenoch');

const TeacherSchema = new mongoose.Schema({
    teacher_first_name: String,
    teacher_last_name: String,
});

const MarksSchema = new mongoose.Schema({   
    date: Date,
    mark: Number,
    student_first_name: String,
    student_last_name: String,
    group_name: String,
    subject_name: String,
    teachers : [TeacherSchema]
});

let Teacher = mongoose.model("Teacher", TeacherSchema);
let Marks = mongoose.model("Marks", MarksSchema);

let teacher1 = new Teacher({
    teacher_first_name: "Paco", 
    teacher_last_name: "Diaz"
})
let teacher2 = new Teacher({
    teacher_first_name: "Marlena", 
    teacher_last_name: "Cid"
})
let teacher3 = new Teacher({
    teacher_first_name: "Maria", 
    teacher_last_name: "Gonzalez"
})
let teacher4 = new Teacher({
    teacher_first_name: "Inmaculada", 
    teacher_last_name: "Jiemnez"
})
let teacher5 = new Teacher({
    teacher_first_name: "Naila", 
    teacher_last_name: "Munich"
})
let teacher6 = new Teacher({
    teacher_first_name: "Nayan", 
    teacher_last_name: "Bergel"
})
let teacher7 = new Teacher({
    teacher_first_name: "Roberto", 
    teacher_last_name: "Alvarez"
})
let teacher8 = new Teacher({
    teacher_first_name: "Marcos", 
    teacher_last_name: "Pombo"
})
let teacher9 = new Teacher({
    teacher_first_name: "Estrella", 
    teacher_last_name: "Jimenez"
})
let teacher10 = new Teacher({
    teacher_first_name: "Tamara", 
    teacher_last_name: "Davalos"
})


let marks1 = new Marks({
    date:("2024/05/1"), 
    mark: 7, 
    student_first_name: "Carlota", 
    student_last_name: "Bergel", 
    group_name: "a", 
    subject_name: "Lengua", 
    teachers: [teacher1]
})
let marks2 = new Marks({
    date:("202/08/13"), 
    mark: 6, 
    student_first_name: "Daniel", 
    student_last_name: "Marco", 
    group_name: "b", 
    subject_name: "Ingles", 
    teachers: [teacher2]
})
let marks3 = new Marks({
    date:("2024/1/5"),
    mark: 1, 
    student_first_name: "Sofia", 
    student_last_name: "Sanz", 
    group_name: "c", 
    subject_name: "ciencias", 
    teachers: [teacher3]
})
let marks4 = new Marks({
    date:("2019-09-15"), 
    mark: 4, 
    student_first_name: "Felipe", 
    student_last_name: "escarpa", 
    group_name: "d", 
    subject_name: "Matematicas", 
    teachers: [teacher4]
})
let marks5 = new Marks({
    date:("2018-10-16"), 
    mark: 3, 
    student_first_name: "Juanjo", 
    student_last_name: "Perez", 
    group_name: "e", 
    subject_name: "tecnologia", 
    teachers: [teacher5]
})
let marks6 = new Marks({
    date:("2020-11-17"), 
    mark: 5, 
    student_first_name: "Francisco", 
    student_last_name: "Zamora", 
    group_name: "f", 
    subject_name: "Plastica", 
    teachers: [teacher6]
})
let marks7 = new Marks({
    date:("2021-12-18"), 
    mark: 8, 
    student_first_name: "gema", 
    student_last_name: "gil",
    group_name: "a", 
    subject_name: "educacion fisica", 
    teachers: [teacher7]
})
let marks8 = new Marks({
    date:("2022-01-19"), 
    mark: 9, 
    student_first_name: "julia", 
    student_last_name: "cristo", 
    group_name: "b", 
    subject_name: "historia", 
    teachers: [teacher8]
})
let marks9 = new Marks({
    date:("2022/04/02"), 
    mark: 7, 
    student_first_name: "Guadalupe", 
    student_last_name: "priego", 
    group_name: "c", 
    subject_name: "naturales", 
    teachers: [teacher9]
})
let marks10 = new Marks({
    date:("2019-03-21"), 
    mark: 8, 
    student_first_name: "josemary", 
    student_last_name: "perez", 
    group_name: "d", 
    subject_name: "religion", 
    teachers: [teacher10]
})


// Teacher.insertMany([teacher1, teacher2, teacher3, teacher4, teacher5, teacher6, teacher7, teacher8, teacher9, teacher10])
// .then(function(docs) {
//     console.log("profesores añadidos");
// })
// .catch(function(err) {
//     console.error(err);
// });

// Marks.insertMany([marks1, marks2, marks3, marks4, marks5, marks6, marks7, marks8, marks9, marks10])
// .then((docs) => {
//     console.log("notas añadidas");
// })
// .catch((err) => {
//     console.error(err);
// });

// Nota de una asignatura
// Marks.aggregate([
//     {$match: {subject_name: "naturales"}},
//     {$group: {_id: null, avgMark: {$avg: "$mark"}}}
// ])
// .then(result => {
//     const avgMark = result[0].avgMark;
//     console.log(`nota es ${avgMark}`);
// })
// .catch(error => {
//     console.error(error);
// });

// total alumnos
// Marks.aggregate([
//     { $group: { _id: null, count: { $sum: 1 } } }
// ])
// .then(result => {
//     console.log("Total de alumnos: " + result[0].count); 
// })
// .catch(err => {
//     console.log(err);
// });
  
//   nombre y apellidos alumnos
// Marks.aggregate([
//     {
//         $group: {
//             _id: { student_first_name: "$student_first_name", student_last_name: "$student_last_name" },
//             count: { $sum: 1 }
//         }
//     },
//     {
//         $project: {
//             _id: 0, student_first_name: "$_id.student_first_name", student_last_name: "$_id.student_last_name",
//             count: 1
//         }
//     }
// ]).then((result) => {
//     console.log(result); 
// }).catch((err) => {
//     console.log(err);
// });

//   nombre y apellidos profesores
// Teacher.aggregate([
//     {
//         $group: {
//             _id: { teacher_first_name: "$teacher_first_name", teacher_last_name: "$teacher_last_name" },
//             count: { $sum: 1 }
//         }
//     },
//     {
//         $project: {
//             _id: 0,
//             teacher_first_name: "$_id.teacher_first_name", teacher_last_name: "$_id.teacher_last_name", count: 1
//         }
//     }
// ]).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });


// total alumnos por grupos inverso alfabetico
// Marks.aggregate([
//     {
//       $group: {
//         _id: "$group_name", totalStudents: { $sum: 1 }
//       }
//     },
//     {
//       $sort: { _id: -1 }
//     }
// ]).then(result => {
//     console.log(result);
// }).catch(err => {
//     console.log(err);
// });

// nota top5 asignatura>5
// Marks.aggregate([
//     {
//       $group: {
//         _id: "$subject_name",
//         avgGrade: { $avg: "$mark" }
//       }
//     },
//     {
//       $match: {
//         avgGrade: { $gt: 5 }
//       }
//     },
//     {
//       $sort: {
//         avgGrade: -1
//       }
//     },
//     {
//       $limit: 5
//     },
//     {
//       $project: {
//         _id: 0,
//         subject: "$_id",
//         avgGrade: 1
//       }
//     }
// ]).then(result => {
//     console.log(result);
// }).catch(err => {
//     console.log(err);
// });


// num preofesores por asignatura
Marks.aggregate([
    {
      $unwind: "$teachers"
    },
    {
      $group: {
        _id: { subject_name: "$subject_name", teacher: { $concat: [ "$teachers.teacher_first_name", " ", "$teachers.teacher_last_name" ] } },
        count: { $sum: 1 }
      }
    }
]).then(result => {
    console.log(result);
}).catch(err => {
    console.log(err);
});