import { Component, Input, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
// components
import { HeaderComponent } from '../../components/header/header.component';
// services
import { DeviceService } from '../../services/device.service';
import { ListDevicesComponent } from '../../components/list-devices/list-devices.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HttpClientModule,
    HeaderComponent,
    ListDevicesComponent,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  @Input() devices: any[] = [];

  constructor(private deviceService: DeviceService) {}
  ngOnInit(): void {
    this.fetchDevices();
  }

  fetchDevices() {
    this.deviceService.getDevices().subscribe((data) => {
      this.devices = data;
    });
  }
}
