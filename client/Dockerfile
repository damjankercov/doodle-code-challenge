FROM node:15.8.0-alpine3.10 as build
WORKDIR /app
COPY . ./

RUN npm install

EXPOSE 3000
CMD [ "npm", "start" ]