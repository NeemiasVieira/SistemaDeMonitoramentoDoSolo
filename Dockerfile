FROM node:20
WORKDIR /app-front
COPY . /app-front

RUN npm install --force

EXPOSE 3000

CMD ["npm", "run", "start"]