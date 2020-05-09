const {Usuario, Post, Comentario} = require('../models')
const sequelize = require('sequelize')
const multer = require('multer')


const HomeController = {
    curtir: (req, res) => {
        const {post} = req.body;

        Post.update({
            n_likes: sequelize.literal('n_likes+1')
        },{
            where: {id: post}
        })

        res.redirect('/home')
    },
    comentar: (req,res) => {
        const {usuario, post, comentario} = req.body

        Comentario.create({
            texto: comentario,
            usuarios_id: usuario ,
            posts_id: post 

        })


        res.redirect('/home')
    },
    publicar: async (req, res) => {
        let {texto, usuario} = req.body;
        let {files} = req;

        let novoPost = await Post.create({
            texto,
            img: '/img/publicacoes/' + files[0].originalname, 
            usuarios_id: usuario,
            n_likes: 0
        })

        res.redirect('/home')
    }

    
}

module.exports = HomeController