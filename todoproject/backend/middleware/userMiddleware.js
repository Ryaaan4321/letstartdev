import jwt from 'jsonwebtoken'
export const userMiddleware=async function (req,res,next) {
    try{
        const token=req.headers.authorization?.split(" ")[1];
        if(!token){
          return res.status(401).json({
            message:"authenticaion token is missing"
          })
        }
        const secret_key=process.env.JWT_SECRET || "bhadwesecretkeydekhega"
        const decodedToken=jwt.verify(token,secret_key);
        req.user=decodedToken
        next();
    }catch(err){
       return res.status(401).json({
        message:"invalid or expired token",
        err:err.message
       })
    }
};