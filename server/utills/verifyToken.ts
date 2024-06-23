import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const verifyUserToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.jwt_token;
  if (!token) {
    return res.status(401).json({ message: "You are not authenticated" });
  }
  if (process.env.SECRET_KEY_JWT) {
    jwt.verify(token, process.env.SECRET_KEY_JWT, (error: any, user: any) => {
      if (error) res.status(403).json({ message: "Token is invalid" });
      next();
    });
  }
};
