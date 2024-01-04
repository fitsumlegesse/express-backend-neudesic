// models/UserSubmission.js
const mongoose = require('mongoose');

const userSubmissionSchema = new mongoose.Schema({
  ArtistName: {
    type: String,
    required: true,
  },
  SongName: {
    type: String,
    required: true,
  },
  Link: {
    type: String,
    required: false,
  },
});

const UserSubmission = mongoose.model('UserSubmission', userSubmissionSchema);

module.exports = UserSubmission;
