export const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connection = await mongoose.connect('YOUR_MONGODB_ATLAS_URI', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB Atlas!');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
  }
};


