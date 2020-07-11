FROM node:12.18.2-alpine3.9

WORKDIR /meco-app/

COPY app.js ./
COPY package.json ./

RUN npm install

CMD ["npm","run","start"]