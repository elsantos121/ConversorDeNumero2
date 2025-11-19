FROM node:18-alpine
WORKDIR /app
COPY package.json ./
RUN npm install --production live-server
COPY . .
EXPOSE 8080
CMD ["live-server", "--port=8080", "--host= localhost", "--no-browser", "--quiet"]
