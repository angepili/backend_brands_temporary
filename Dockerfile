# Use specific Node version for better reproducibility
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Use non-root user for security
USER node

# Start the application
CMD ["node", "app.js"]