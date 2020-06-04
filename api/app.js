import {} from 'dotenv/config';
import server from './config/server';

const port = process.env.SERVER_PORT || 5000;
server.listen(port, () => {
  console.log(`Server started with port ${port}`);
});
