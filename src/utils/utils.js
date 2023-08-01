import {fileURLToPath} from 'url';
import { dirname } from 'path';
import path from 'path';
import bcrypt from 'bcrypt';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import authConfig from '../utils/authConfig.js';

export const createHash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10));
export const isValidPassword = (user, password) => bcrypt.compareSync(password, user.password);

const __filename = fileURLToPath(import.meta.url);
//one folder level down from this file as utils.js is in src/utils and not in src
const __dirname = path.join(dirname(__filename), `../`);

export default __dirname;

export const passportCall = (strategy) => {
    return async (req, res, next) => {
        passport.authenticate(strategy, (err, user, info) => {
            if (err) return res.status(500).send({ status: 0, msg: err.message ? err.message : err.toString() });
            if (!user) return res.status(401).send({ status: 0, msg: info.message ? info.message : info.toString() });
            req.user = user;
            next();
        })(req, res, next);
    };
};

export const authorization = (role) => {
    return async (req, res, next) => {
        const token = req.cookies[authConfig.AUTH_COOKIE];
        if (!token) {
            return res.status(401).send({ status: 0, msg: 'Unauthorized' });
        }
        try {
            const decodedToken = jwt.verify(token, authConfig.AUTH_SECRET);
            req.user = decodedToken.user;
            if (role) {
                const userRoles = Array.isArray(req.user.role) ? req.user.role : [req.user.role];
                if (Array.isArray(role)) {
                    if (!role.some(r => userRoles.includes(r))) {
                        return res.status(403).send({ status: 0, msg: 'Forbidden' });
                    }
                } else {
                    if (!userRoles.includes(role)) {
                        return res.status(403).send({ status: 0, msg: 'Forbidden' });
                    }
                }
            }
            next();
        } catch (error) {
            return res.status(401).send({ status: 0, msg: 'Unauthorized' });
        }
    };
};

export const jwtVerify = (token) => {
    try {
        const decodedToken = jwt.verify(token, authConfig.AUTH_SECRET);
        return decodedToken;
    } catch (error) {
        return false;
    }
};