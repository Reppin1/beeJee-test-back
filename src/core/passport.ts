import passport from "passport";
import { Request } from 'express'
import JwtStrategy from 'passport-jwt'
import { User } from "../controllers/UserContoller/UserEntity/entity";

import dotenv from 'dotenv';

dotenv.config({
  path: '.env',
});

const cookieExtractor = function (req: Request) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }
  return token;
};

const opts = {
  jwtFromRequest: cookieExtractor,
  secretOrKey: process.env.JWT_SECRET_KEY,
};

passport.use('jwt',
  new JwtStrategy.Strategy(opts, async (jwt_payload, done) => {
    const user = await User.findOne({where: {email: jwt_payload.user}})
    if(user) {
      return done(null, user)
    }
    else {
      return done(null, false)
    }
  }),
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user: User, done) {
  done(null, user)
});

export default passport