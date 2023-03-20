import dotenv from "dotenv";
import jwt from "jsonwebtoken";

import { 
    status, 
    message, 
    responseHelper 
} from "./ResponseHelper.js";

dotenv.config();

export const Authentication = (req, res) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token === undefined) return responseHelper(res, status.errorToken, message.tokenNotFound);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
        if (error) return responseHelper(res, status.errorRequest, message.errorVerifyToken);
        req.user = user;
    });
    // console.log(token);
};