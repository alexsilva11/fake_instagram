let Comentario = (sequelize, DataTypes) => {
    let comentario = sequelize.define(
        'Comentario', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            texto: {
                type: DataTypes.STRING,
                allowNull: false
            },
            usuarios_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            posts_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }
        }, {
            tableName: "Comentarios",
            timestamps: false
        }
    )

    comentario.associate = (models) => {
        comentario.belongsTo(models.Post, {foreignKey:'posts_id', as:'post'})
    }

    return comentario
}

module.exports = Comentario;