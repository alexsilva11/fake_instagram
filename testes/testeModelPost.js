const {
    sequelize,
    Post,
    Comentario,
    Usuario
} = require('../models');

Post.findAll({
    include: [{
        model: Comentario,
        as: 'comentarios',
        include: 'usuario'
    }, 'usuario']
}).then(
    data => {
        console.log(data.map(u => u.toJSON()));
        sequelize.close();
    }
)