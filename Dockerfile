FROM node:20.9.0
WORKDIR /app
COPY package.json /app
RUN npm install
EXPOSE 8000
COPY . /app