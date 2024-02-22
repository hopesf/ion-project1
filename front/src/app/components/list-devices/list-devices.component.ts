import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-devices',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-devices.component.html',
  styleUrl: './list-devices.component.css',
})
export class ListDevicesComponent {
  @Input() devices: any[] = [];
}
