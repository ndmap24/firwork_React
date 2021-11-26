/**
 * token middleware file
 */

var jwt = require("jsonwebtoken");

var JWT_SECRET = process.env.JWT_SECRET

tokenMiddleware = function(req, res, next) {
    var token = req.headers.token ? req.headers.token : "";
    if (token === "") {
        response={ status: 401, msg: 'Token is required',data:[] }
        return res.send(response) 
    } else {
        jwt.verify(token, JWT_SECRET, function(err, decoded) {
            if (err) {
                response={ status: 401, msg: 'Session Expire',data:[] }
                return res.send(response) 
            } else {
                res.locals.userData = decoded;
                next();
            }
        });
    }
};
module.exports = tokenMiddleware;
