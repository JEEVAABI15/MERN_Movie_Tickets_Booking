const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_TOKEN = 'ksj@$jdhd5589*&';

const loginUser = async (request, response) => {
    const { email, password } = request.body;
    try {
        const validUser = await userModel.findOne({ email });
        if (!validUser) {
            return response.status(401).json({ message: "Invalid email." });
        }

        const isPasswordValid = await bcrypt.compare(password, validUser.password);
        if (!isPasswordValid) {
            return response.status(401).json({ message: "Invalid Password" });
        }

        const AUTH_TOKEN = jwt.sign({ email: validUser.email, role: validUser.role }, JWT_TOKEN);
        return response.status(200).json({ status: 'OK', token: AUTH_TOKEN });

    } catch (error) {
        console.error('Error occurred while logging in user:', error);
        return response.status(500).json({ message: error.message });
    }
};

const loginAdmin = async (request, response) => {
    const { email, password } = request.body;
    try {
        const validUser = await userModel.findOne({ email });
        if (!validUser) {
            return response.status(401).json({ message: "Invalid email." });
        }

        if (validUser.role !== 'admin') {
            return response.status(403).json({ message: "Access denied. Not an admin." });
        }

        const isPasswordValid = await bcrypt.compare(password, validUser.password);
        if (!isPasswordValid) {
            return response.status(401).json({ message: "Invalid Password" });
        }

        const AUTH_TOKEN = jwt.sign({ email: validUser.email, role: validUser.role }, JWT_TOKEN);
        return response.status(200).json({ status: 'OK', token: AUTH_TOKEN });

    } catch (error) {
        console.error('Error occurred while logging in admin:', error);
        return response.status(500).json({ message: error.message });
    }
};

module.exports = { loginUser, loginAdmin };
