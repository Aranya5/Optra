# Use the official Node.js 20 image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project
COPY . .

# Expose the port Vite will run on
EXPOSE 3000

# Run the Vite dev server
CMD ["npm", "run", "dev"]