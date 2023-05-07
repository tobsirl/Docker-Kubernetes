FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . .

ARG NODE_ENV=production

ENV PORT 3000

EXPOSE $PORT

RUN chown -R node /usr/src/app

USER node

CMD ["npm", "start"]
