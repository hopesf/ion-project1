import WebSocket from "ws";

const connect = () => new WebSocket.Server({ port: process.env.WEBSOCKET_PORT });
const wsHelper = { connect };

export default wsHelper;

// const clients = [];

// wss.on('connection', ws =>{
//     console.log('New client connected');
//     clients.push(ws);

//     ws.on('close', ()=>{
//         console.log('Client has disconnected');
//         clients.splice(clients.indexOf(ws), 1);
//     })
// });
