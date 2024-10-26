// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();
// const app = express();
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect(
//   'mongodb+srv://naz:mongodb2297@cluster0.j8ucn.mongodb.net/naz?retryWrites=true&w=majority&appName=Cluster0'
// )
// .then(() => console.log("MongoDB connected"))
// .catch((err) => console.log(err));

// // Define a schema and model for the 'users' collection
// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   phone: String,
//   github: String,
//   linkedin: String
// });

// const User = mongoose.model('users', userSchema);

// // Define a route to fetch personal info from MongoDB
// app.get('/api/user', async (req, res) => {
//   try {
//     const user = await User.findOne(); // Fetch the first user in the 'users' collection
//     res.json(user);
//     console.log("Fetched data:", user); // Log the fetched data in VSCode terminal
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB using the connection string from the .env file
mongoose.connect(process.env.MONGODB_URI) // Use the MONGODB_URI from .env
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Define a schema and model for the 'users' collection
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  github: String,
  linkedin: String
});

const User = mongoose.model('users', userSchema);

// Define a route to fetch personal info from MongoDB
app.get('/api/user', async (req, res) => {
  try {
    const user = await User.findOne(); // Fetch the first user in the 'users' collection
    res.json(user);
    console.log("Fetched data:", user); // Log the fetched data in VSCode terminal
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
