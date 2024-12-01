import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BirthdayComponent } from './birthday/birthday.component';
import { data } from './data/dummyData';
import { DataServiceService } from './services/dataService/data-service.service';
import { WorkAnniverseryComponent } from './work-anniversery/work-anniversery.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { CoreValuesComponent } from './core-values/core-values.component';
import { LogisticsTermsComponent } from './logistics-terms/logistics-terms.component';
import { LogoContainerComponent } from './logo-container/logo-container.component';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BirthdayComponent,
    WorkAnniverseryComponent,
    CertificationsComponent,
    CoreValuesComponent,
    LogisticsTermsComponent,
    LogoContainerComponent,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'announcements-new';
  filteredObjects: any = [];
  currentCategory: any;
  constructor(private dataService: DataServiceService) {}
  newData: any;

  ngOnInit() {
    this.filteredObjects = this.dataService.getFilteredData();
    this.dataService.currentCategory$.subscribe((data) => {
      this.currentCategory = data;
    });
    console.log(this.filteredObjects);
    // this.dataService.updateData(this.filteredObjects.anniverseries);
    // this.dataService.currentData$.subscribe((data) => {
    //   this.newData = data;
    //   console.log('exprimentail', data);
    // });
  }
}
