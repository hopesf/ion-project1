import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { WebSocketService } from './web-socket.service';
import { ToastrService } from 'ngx-toastr';
import { DeviceService } from './device.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'front';
  devices: any[] = []; // Devices değişkenini tanımlayın

  constructor(
    private webSocketService: WebSocketService,
    private toastr: ToastrService,
    private deviceService: DeviceService
  ) {}

  ngOnInit(): void {
    this.initializeSocketConnection();
    this.receiveSocketResponse();
  }

  ngOnDestroy(): void {
    this.disconnectSocket();
  }

  initializeSocketConnection() {
    this.webSocketService.connectSocket('bağlandım');
  }

  receiveSocketResponse() {
    this.webSocketService.receiveDevice().subscribe((message: any) => {
      this.showSuccess(message.deviceId, message.deviceName);
      this.deviceService.getDevices().subscribe((response: any) => {
        this.devices = response; // Yeni değerle Devices değişkenini güncelleyin
      });
    });
  }

  disconnectSocket() {
    this.webSocketService.disconnectSocket();
  }

  showSuccess(deviceId: string, deviceName: string) {
    this.toastr.info(
      `cihaz adı ${deviceName} olarak güncellendi`,
      `${deviceId} numaralı cihaz`
    );
  }
}
