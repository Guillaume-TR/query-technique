import server from './config/server';
import dotenv from 'dotenv';

const config = dotenv.config();
if (config.error) throw config.error;

const port = process.env.SERVER_PORT || 5000;
server.listen(port, () => {
  console.log(`Server started with port ${port}`);
});
