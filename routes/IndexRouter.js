var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');
let storage = multer.diskStorage ({
    destination: (req, file, cb) =>{
        cb(null, path.join('public', 'img', 'publicacoes'));
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname);

    }
});
let upload = multer({ storage: storage})


const VerificaUsuarioLogado = require("../middlewares/verificaUsuarioLogado");
const AuthController = require("../controllers/AuthController");
const HomeController = require("../controllers/HomeController");

router.get('/', AuthController.showLogin);
router.get('/registro',AuthController.showRegistro);
router.get('/home', VerificaUsuarioLogado, AuthController.showHome);
router.get('/login', AuthController.showLogin);
router.post('/login', AuthController.login);
router.post('/curtir', HomeController.curtir);
router.post('/comentario', HomeController.comentar);
router.post('/registro', AuthController.registrar);
router.post('/publicar', upload.any(), HomeController.publicar);

module.exports = router;
