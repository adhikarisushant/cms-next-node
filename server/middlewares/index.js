require("dotenv").config();
import User from '../models/user';
import expressJwt from 'express-jwt';

export const requireSignin = expressJwt({

    secret: process.env.JWT_SECRET, 
    algorithms: ["HS256"],     
}); 

export const isAdmin = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id);

        if (user.role !== "Admin") {
            return res.status(403).send("Unauthorized");
        } else {
            next();
        }
    } catch (err) {
        console.log(err);
    }
}