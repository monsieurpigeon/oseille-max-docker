FROM node:16

WORKDIR /home/node/app

COPY package.json ./

RUN npm i

COPY . .

ENV NODE_PATH=./build
ENV PORT=8080
EXPOSE 8080
RUN npm run build

CMD [ "node", "build/index.js" ]
