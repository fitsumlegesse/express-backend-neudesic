# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the entire application directory to the container
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Define the command to run your application
CMD ["node", "app.js"]  "server.js" 
