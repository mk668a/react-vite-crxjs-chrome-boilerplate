FROM node:18.15.0-alpine3.16

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .
