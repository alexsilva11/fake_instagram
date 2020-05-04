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
        let posts = await Post.findAll({
            include: [{
                model: Comentario,
                as: 'comentarios',
                include: 'usuario'
            }, 'usuario']
        })
        res.render('index', {posts});
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
       

    }


}

module.exports = AuthController;