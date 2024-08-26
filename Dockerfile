FROM node:20
WORKDIR /app-front
COPY . /app-front
RUN npm install -g serve
RUN npm install --force

EXPOSE 3000

RUN npm run build
CMD ["serve", "-s", "build"]