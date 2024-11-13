const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

console.log("Mongo URI:", process.env.MONGODB_URI);

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("Connection error:", err));

// Define a schema and model for the 'users' collection
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    github: String,
    linkedin: String,
});

const User = mongoose.model('User', userSchema);

// Define a route to fetch personal info from MongoDB
app.get('/api/user', async (req, res) => {
    try {
        const user = await User.findOne(); // Fetch the first user in the 'users' collection
        res.json(user);
        console.log("Fetched data:", user); // Log the fetched data for debugging
    } catch (err) {
        console.error("Error fetching user:", err);
        res.status(500).json({ message: err.message });
    }
});

// Serve static files in production
// if (process.env.NODE_ENV === 'production') {
//     // Serve frontend build folder as static files
//     app.use(express.static(path.join(__dirname, 'frontend/build')));

//     // Serve the frontend app for any route not handled by the backend
//     app.get('*', (req, res) => {
//         res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
//     });
// }

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


   
