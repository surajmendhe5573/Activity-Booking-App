const jwt= require('jsonwebtoken');

const authenticate= (req, res, next)=>{
    const token= req.header('Authorization')?.replace('Bearer ', '');

    if(!token){
        return res.status(401).json({message: 'Access Denied, No token provided'});
    }

    try {
        const decoded= jwt.verify(token, process.env.JWT_SECRET);
        req.user= decoded;

        next();
        
    } catch (error) {
        return res.status(401).json({message: 'Invalid or Expired token'});
    }
};


module.exports= authenticate;