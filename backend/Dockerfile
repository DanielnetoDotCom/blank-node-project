FROM node:20-bookworm AS builder

WORKDIR /app

# Remove cached artifacts and install dependencies
COPY package*.json ./
RUN rm -rf node_modules package-lock.json && npm install

# Copy application files
COPY . .

# Environment configuration
ENV PORT=4000

# Expose the backend port
EXPOSE 4000

# Start the backend server
CMD ["npm", "start"]