import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (req, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECTER, {
        expiresIn: "2d",
    });
    req.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 1000,

    });

    return token;

};