import { Component, Input, OnInit, inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule],
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
