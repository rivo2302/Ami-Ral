const jwt = require('jsonwebtoken');
const SECRET = 'mykey'
function verify_token(req, res, next){
    const token = req.headers.authorization ? req.headers.authorization.replace("Accessing ", "") : false;
    // Présence d'un token
    if (!token) {
        return res.status(401).json({ message: 'Error. Need a token' });
    }
    // Véracité du token
    jwt.verify(token, SECRET, (err, decodedToken) => {
        if (err) {
            res.status(401).json({ message: 'Error. Bad token' })
        } else {
            return next();
        }
    })
}

module.exports = {
    admin : (req, res, next) => {
        const type = req.body.type ? req.body.type : req.query.type;
        if(type){
            if (type == "Administrateur") {
                verify_token(req, res, next);
            }
            else{
                return res.status(401).json({ message: "Erreur d'accées" });
            }
        } else {
            return res.status(401).json({ message: "Non authorisé" });
        }      
    },

}