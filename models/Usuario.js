let Usuario = (sequelize, DataTypes) => {
    let usuario = sequelize.define(
        'Usuario',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull:false
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            senha: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },{
            tableName: "usuarios",
            timestamps: false
        }

    ) 

    usuario.associate = (models) => {
        usuario.hasMany(models.Post, {foreignKey:'usuarios_id', as:'usuario'})
    }

    return usuario
}

module.exports = Usuario;