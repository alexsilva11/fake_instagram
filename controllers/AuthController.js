const {Usuario, Comentario, Post} = require('../models')

const bcrypt = require("bcrypt")

const AuthController = {
    
    showLogin: (req,res) => {
        res.render('auth/login');
    },

    showRegistro: (req,res) => {
        res.render('auth/register');
    },

    showHome: async (req,res) => {

        let usuario = req.session.usuario
        console.log(req.session.usuario)
        let posts = await Post.findAll({
            include: [{
                model: Comentario,
                as: 'comentarios',
                include: 'usuario'
            }, 'usuario']
        })

        res.render('index', {posts, usuario});
    },

    login: async (req,res) => {
        
        const {email, senha} = req.body;

        const user = await Usuario.findOne({ where: { email } });
        
        if(!user) {
            res.redirect('/login?error=1')
        } 

        if(!bcrypt.compareSync(senha, user.senha)){
            res.redirect('/login?error=1')
        }

        req.session.usuario = user;

        res.redirect('/home');
       

    },

    registrar: (req, res) => {
        let {nome, email, senha} = req.body;

        senha = bcrypt.hashSync(senha, 10);

        Usuario.create({
            nome,
            email,
            senha
        })


        res.render('auth/login', {mensagem: 'Cadastro efetuado com sucesso'})
    }


}

module.exports = AuthController;