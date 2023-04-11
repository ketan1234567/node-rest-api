const jwt = require('jsonwebtoken'); 
exports.authenticateToken=(req, res, next)=>
 { //const authHeader = req.headers['authorization'] 
// const token = authHeader && authHeader.split(' ')[1]
   const token = req.cookies["token"]
  if (token == null) return res.sendStatus(401)

  secretkey="ketan_d"
   jwt.verify(token, secretkey,(err , user ) =>{ 
    console.log(err);
    if (err) return res.sendStatus(403) 
    req.user = user
     next()
    
    }) }
