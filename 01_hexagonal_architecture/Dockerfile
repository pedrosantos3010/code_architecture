FROM node:18

WORKDIR /app

COPY . .

RUN npm install

RUN apt-get update && apt-get install sqlite3 -y

EXPOSE 3000

CMD ["npm", "start"]