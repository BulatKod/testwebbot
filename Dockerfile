FROM node:latest
WORKDIR /usr/src/app
COPY package.json .
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm install 
RUN npm install @expo/webpack-config@^0.17.0
COPY . ./
EXPOSE 19006
CMD [ "npm", "run", "web" ]