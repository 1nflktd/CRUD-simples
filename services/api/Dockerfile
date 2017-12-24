FROM node:carbon

WORKDIR /usr/src/api

COPY package*.json ./

RUN npm install

COPY databases/ databases/
COPY routes/ routes/
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
