FROM node:18.10.0-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD npm run dev --host 0.0.0.0 --port 3000 --disableHostCheck true