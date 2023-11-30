import * as http from 'http';
import { Server, type WebSocket } from 'ws';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('WebSocket server is running');
});

const wss = new Server({ server });

wss.on('connection', (ws: WebSocket) => {
  console.log('A user connected');

  ws.on('message', (_message: string) => {
    console.log('Received message => ', _message);
  });

  ws.on('close', () => {
    console.log('User disconnected');
  });
});

const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
