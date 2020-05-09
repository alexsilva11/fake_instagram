var express = require('express');
var router = express.Router();

const VerificaUsuarioLogado = require("../middlewares/verificaUsuarioLogado");
const AuthController = require("../controllers/AuthController");
const HomeController = require("../controllers/HomeController");

router.get('/', AuthController.showLogin);
router.get('/registro',AuthController.showRegistro);
router.get('/home', /*VerificaUsuarioLogado,*/ AuthController.showHome);
router.get('/login', AuthController.showLogin);
router.post('/login', AuthController.login);
router.post('/curtir', HomeController.curtir);

module.exports = router;
