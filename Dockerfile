FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy project files into the docker image
COPY . .

# Install app dependencies
RUN npm set progress=false && npm install

# Build the project
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
