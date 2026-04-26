# Use official Node.js image
FROM node:20-slim

# Set working directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application source
COPY . .

# Expose port
EXPOSE 5000

# Start the application
CMD ["npm", "start"]
