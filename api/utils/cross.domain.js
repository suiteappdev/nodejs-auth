var httpAllowed = require('./header/options');
var allowedDomain = require('./header/cors'); 

var allowCrossDomain = function(req, res, next) {
    
    res.header(allowedDomain.cors('*'));
    res.header('Access-Control-Allow-Methods', httpAllowed.grant());
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }

};


module.exports = allowCrossDomain;