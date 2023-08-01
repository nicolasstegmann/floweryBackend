import dotenv from 'dotenv';
dotenv.config();

export default { 
    ADMIN_USER: process.env.ADMIN_USER,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD
};