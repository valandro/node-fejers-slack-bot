FROM node:8-slim
# Create app directory
WORKDIR /
# Install app dependencies
COPY package*.json ./
RUN npm install
# Bundle app source
COPY . .
CMD ["npm", "start"]