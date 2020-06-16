FROM node:13
WORKDIR /app

COPY package*.json ./
RUN yarn install

EXPOSE 3000