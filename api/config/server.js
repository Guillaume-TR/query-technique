import express from "express";
import bodyParser from "body-parser";
import setRoutes from "./routes";

const server = express();

server.use(bodyParser.json());
server.use((request, response, next) => {
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
setRoutes(server);

export default server;
