FROM node:18.10.0-slim

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install -g nodemon

COPY . .

EXPOSE 3001

CMD ["npm", "run", "start:dev"]