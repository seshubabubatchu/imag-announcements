import { Component, Input } from '@angular/core';
import { DataServiceService } from '../services/dataService/data-service.service';

@Component({
  selector: 'app-work-anniversery',
  standalone: true,
  imports: [],
  templateUrl: './work-anniversery.component.html',
  styleUrl: './work-anniversery.component.css',
})
export class WorkAnniverseryComponent {
  @Input() data: any;
  imageUrl: string = '';
  personName: string = '';

  constructor(private dataService: DataServiceService) {}
  ngOnInit() {
    let currentIndex = 0;

    this.data.forEach((item: any) => {
      if (!item.duration) {
        item.duration = 5;
      }
    });
    const updateData = () => {
      console.log('from fun', this.data);
      if (currentIndex < this.data.length) {
        const currentItem = this.data[currentIndex];
        this.imageUrl = currentItem.image_url;
        this.personName = currentItem.name;
        console.log(this.imageUrl);
        console.log(this.personName);
        currentIndex++;
        console.log(currentIndex);
        console.log(this.data.length);
        setTimeout(updateData, currentItem.duration * 1000);
      } else {
        console.log('switching');
        this.dataService.updateCategory('logo');
      }
    };

    updateData();
  }
}
