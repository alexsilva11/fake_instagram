const VerificaUsuarioLogado = (req, res, next) => {

    if(!req.session.usuario){
        res.redirect('/login?error=2');
    }

    next();
}

module.exports = VerificaUsuarioLogado