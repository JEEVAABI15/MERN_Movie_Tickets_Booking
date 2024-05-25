const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const addNewUser = async (request, response) => {
    try {
        const { name, email, password } = request.body;

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return response.status(409).json({ message: 'Email ID already exists...' });
        }

        const encryptedPassword = await bcrypt.hash(password, 10);

        const user = new userModel({
            name,
            email,
            password: encryptedPassword
        });

        const newUser = await user.save();
        
        const payload = { user: { id: newUser.id } };
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
            if (err) {
                console.error('Error signing token:', err);
                return response.status(500).json({ message: 'Error signing token' });
            }
            response.status(201).json({ newUser, token });
        });
    } catch (error) {
        console.error('Error occurred while adding new user:', error);
        response.status(500).json({ message: error.message });
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

        const AUTH_TOKEN = jwt.sign(
            { email: validUser.email, role: validUser.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );
        return response.status(200).json({ status: 'OK', token: AUTH_TOKEN });
    } catch (error) {
        console.error('Error occurred while logging in admin:', error);
        return response.status(500).json({ message: error.message });
    }
};

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

        const AUTH_TOKEN = jwt.sign(
            { email: validUser.email, role: validUser.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );
        return response.status(200).json({ status: 'OK', token: AUTH_TOKEN });
    } catch (error) {
        console.error('Error occurred while logging in user:', error);
        return response.status(500).json({ message: error.message });
    }
};

module.exports = { addNewUser, loginAdmin, loginUser };
