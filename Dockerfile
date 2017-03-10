FROM node:7.7.1

COPY . /usr/src/app
WORKDIR /usr/src/app

RUN npm install --silent

CMD [ "npm", "start" ]
