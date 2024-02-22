import WebSocket from "ws";

const connect = () => new WebSocket.Server({ port: process.env.WEBSOCKET_PORT });
const wsHelper = { connect };

export default wsHelper;
