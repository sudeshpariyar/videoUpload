import { Request, Response } from 'express';
import prisma from '../../db/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const saltRounds = 10;
const secret = process.env.SECRET_KEY_JWT;

export const registerUser = async (req: Request, res: Response) => {
  //check for existing user
  const user = await prisma.user.findFirst({
    where: {
      email: req.body.email,
    },
  });
  if (user) {
    res.json('User already Registered');
  }
  //hashing password
  const hashPassword = bcrypt.hashSync(req.body.password, saltRounds);
  //create a new user
  await prisma.user.create({
    data: {
      email: req.body.email,
      password: hashPassword,
    },
  });
  res
    .status(200)
    .json({ status: 'success', result: 'User created successfully' });
};

export const loginUser = async (req: Request, res: Response) => {
  const user = await prisma.user.findFirst({
    where: {
      email: req.body.email,
    },
  });
  if (!user) {
    res.status(404).json({ message: 'User not found' });
  }
  //compare password

  if (user) {
    const comparePassword = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!comparePassword) {
      res.status(404).json({ message: 'Invalid Credentials.' });
    }
    if (comparePassword) {
      if (secret) {
        jwt.sign(
          { email: req.body.email, id: user.id },
          secret,
          {},
          (err, token) => {
            if (err) throw err;
            res.cookie('jwt_token', token).json({
              id: user.id,
              email: user.email,
            });
          }
        );
      }
    }
  }
};
