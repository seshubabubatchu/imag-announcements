import { Component } from '@angular/core';
import { DataServiceService } from '../services/dataService/data-service.service';

@Component({
  selector: 'app-logo-container',
  standalone: true,
  imports: [],
  templateUrl: './logo-container.component.html',
  styleUrl: './logo-container.component.css',
})
export class LogoContainerComponent {
  constructor(private dataService: DataServiceService) {}
  ngOnInit() {
    setTimeout(() => {
      this.dataService.updateCategory('birthdays');
    }, 5000);
  }
}
