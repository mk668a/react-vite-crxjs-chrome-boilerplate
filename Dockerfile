FROM node:24.15.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .
