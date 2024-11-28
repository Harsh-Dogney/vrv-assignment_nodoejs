const jwt = require('jsonwebtoken');

const moderatorValidate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'No token provided' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.role !== 'Moderator') {
            return res.status(403).json({ message: 'Access denied: Admins only' });
        }
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token from moderatorValidate' });
    }
};

module.exports = moderatorValidate;