import app from './app';
import http from 'http';

// Express app setup
const port = 3000;

const server = http.createServer(app);
server.listen(port);
server.on('listening', () => {
	console.log('Server is listening on port: 3000');
});
