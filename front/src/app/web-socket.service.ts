import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private webSocket: Socket;
  constructor() {
    this.webSocket = new Socket({ url: 'http://localhost:2000', options: {} });
  }

  connectSocket(message: any) {
    this.webSocket.emit('connection', message);
  }

  receiveDevice() {
    return this.webSocket.fromEvent('device');
  }

  disconnectSocket() {
    this.webSocket.disconnect();
  }
}
