const {Router} = require ("express")
const routers = Router();
const userCtrl = require("../controller/photo.controller");

routers.get("/photos", userCtrl.getPhoto);
routers.post("/photos", userCtrl.postDatosUsuario);
routers.put("/photos", userCtrl.putDescription);
routers.delete("/photos", userCtrl.deletePhoto);
routers.delete("/allphotos", userCtrl.deleteAllPhoto);

module.exports = routers;