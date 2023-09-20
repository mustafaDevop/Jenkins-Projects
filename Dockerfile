FROM node:14

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . . 

RUN yarn test

RUN yarn build

CMD [ "yarn", "start" ]