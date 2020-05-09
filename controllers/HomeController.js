const {Usuario, Post, Comentario} = require('../models')
const sequelize = require('sequelize')

const HomeController = {
    curtir: async (req, res) => {
        const {post} = req.body;

        Post.update({
            n_likes: sequelize.literal('n_likes+1')
        },{
            where: {id: post}
        })

        res.redirect('/home')
    }

    
}

module.exports = HomeController