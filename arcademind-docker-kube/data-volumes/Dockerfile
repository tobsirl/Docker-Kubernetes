FROM node:lts-alpine

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package.json .

RUN npm install --production --silent && mv node_modules ../

COPY . .

EXPOSE 3000

VOLUME [ "/usr/src/app/feedback" ]

RUN chown -R node /usr/src/app

USER node

CMD ["node", "server.js"]
