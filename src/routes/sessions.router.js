import { Router } from 'express';
import usersModel from '../dao/models/users.model.js';
import { ADMIN_USER, ADMIN_PASSWORD } from '../utils/adminConfig.js';

const router = Router();

router.post('/register', async (req, res) => {
    try {
        const { firstName, lastName, email, birthDate, password } = req.body;
        
        if ( email === ADMIN_USER ) return res.status(400).send({ status: 0, msg: "Flowerier already exists" });

        const exists = await usersModel.findOne({ email });
        if (exists) return res.status(400).send({ status: 0, msg: "Flowerier already exists" });
        const user = {
            firstName,
            lastName,
            email,
            birthDate,
            password
        }
        await usersModel.create(user);
        req.session.user = {
            name: `${user.firstName} ${user.lastName}`,
            email: user.email,
            birthDate: user.birthDate,
            userRole: 'user'
        }        
        res.send({ status: 1, msg: "New flowerier registered" });
    } catch (error) {
        res.status(500).send({ status: 0, msg: error.message });
    }
})

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        let user;

        if (email === ADMIN_USER) {
            if (password !== ADMIN_PASSWORD ) {
                return res.status(400).send({ status: 0, msg: 'Password is incorrect' });
            }
            user = {
                firstName: 'Admin',
                lastName: 'Coder',
                email: ADMIN_USER,
                birthDate: '',
                userRole: 'admin'
            };
        } else {
            user = await usersModel.findOne({ email });
            if (!user) return res.status(400).send({ status: 0, msg: 'Wrong flowerier!' });
            if (user.password !== password) {
                return res.status(400).send({ status: 0, msg: 'Password is incorrect' });
            }
            user = { ...user.toObject(), userRole: 'user' };
        }

        req.session.user = {
            name: `${user.firstName} ${user.lastName}`,
            email: user.email,
            birthDate: user.birthDate,
            userRole: user.userRole
        };

        res.send({ status: 1, msg: 'Flowerier successfully logged in', user: req.session.user });
    } catch (error) {
        res.status(500).send({ status: 0, msg: error.message });
    }
});

router.post('/logout', (req, res) => {
    req.session.destroy();
    res.send({ status: 1, msg: 'Flowerier successfully logged out' });
})

export default router;