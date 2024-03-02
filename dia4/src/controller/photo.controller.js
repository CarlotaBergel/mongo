const {mongoose} = require("../database");

const photoSchema = new mongoose.Schema({
    user: String,
    url: [String],
    title: String,
    description: String
});

var BBDDphotos = mongoose.model("photos", photoSchema);

function getPhoto(request, response){
    if(request.query.id == null){
        BBDDphotos.find({})
        .then((usuarios) =>
        {
            console.log(usuarios);
            usuarios.forEach((usuario) =>{
                console.log(usuario.url);
                response.send(usuario.url);
            });
            //console.log(photo);
        })
        .catch((err) =>
        {
            console.log(err);
            process.exit(-1);
        })
    }else{
        BBDDphotos.findOne({user: request.query.id })
        .then((usuario) =>
        {
            console.log(usuario.url);
            response.send(usuario.url);
        })
        .catch((photo) =>
        {
            process.exit(-1);
        })
    }
}

function postDatosUsuario(req, res){
    let respuesta;
    if(req.body.user == null || req.body.user == '') {
        respuesta = "No se ha definido una petición correcta";
    }else{
        try{
            let newDatos = ({
                "user": req.body.user,
                "url": req.body.url,
                "description": req.body.description,
                "title": req.body.title
            });
            console.log(newDatos);
            BBDDphotos.create(newDatos);
            respuesta = "Se crea correctamente";
        } catch(error) {
            console.error(error);
            respuesta = error;
        }
    }
    res.send(respuesta);
};

function putDescription(req, res) {
    let respuesta;
    if (req.body.title == '') {
        respuesta = "No se ha definido una petición correcta";
    } else {
        try {
            const update = {
                description: req.body.description,
            };
            BBDDphotos.findOneAndUpdate(
                { title: req.body.title },
                update,
                { new: true }
            )
            .then((usuario) => {
                console.log(usuario);
                respuesta = usuario;
            })
            .catch((error) => {
                console.error(error);
                respuesta = error;
            });
        } catch (error) {
            console.error(error);
            respuesta = error;
        }
    }
    res.send(respuesta);
}

function deletePhoto(req, res) {
    let respuestadelete = "";
    if (req.body.user == "" && req.body.title == "") {
        respuestadelete = "No se ha definido una petición correcta";
    } else {
        try {
            const filtro = {title: req.body.title, user: req.body.user };
            BBDDphotos.findOneAndDelete(filtro)
                .then((fotoEliminada) => {
                    if (fotoEliminada) {
                        respuestadelete = "Foto eliminada correctamente";
                    } else {
                        respuestadelete = "No se encontró la foto para eliminar";
                    }
                })
                .catch((error) => {
                    console.error(error);
                    respuestadelete = "Error al eliminar la foto";
                });
        } catch (error) {
            console.error(error);
            respuestadelete = "Error al eliminar la foto";
        }
    }
    console.log(respuestadelete);
    res.send(respuestadelete);
}

function deleteAllPhoto(req, res) {
    let respuestadelete = "";
    if (req.body.user == "" && req.body.title == "") {
        respuestadelete = "No se ha definido una petición correcta";
    } else {
        try {
            const filtro = {user: req.body.user };
            BBDDphotos.deleteMany(filtro)
            .then((fotoEliminada) => {
                if (fotoEliminada) {
                    respuestadelete = "Foto eliminada correctamente";
                } else {
                    respuestadelete = "No se encontró la foto para eliminar";
                }
            })
            .catch((error) => {
                console.error(error);
                respuestadelete = "Error al eliminar la foto";
            });
        } catch (error) {
            console.error(error);
            respuestadelete = "Error al eliminar la foto";
        }
    }
    console.log(respuestadelete);
    res.send(respuestadelete);
}

module.exports = {getPhoto, postDatosUsuario, putDescription, deletePhoto, deleteAllPhoto};