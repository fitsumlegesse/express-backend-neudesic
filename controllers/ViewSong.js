const UserSubmission = require('../models/UserSubmission');

const ViewSong = async (req, res) => {
  try {
    // Fetch all user submissions from the database
    const userSubmissions = await UserSubmission.find();

    // Respond with the fetched data
    res.json(userSubmissions);
  } catch (error) {
    // Handle errors
    res.status(500).json({ message: error.message });
  }
};

module.exports = { ViewSong };
