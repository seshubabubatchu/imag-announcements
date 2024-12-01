import { Injectable } from '@angular/core';
import { data } from '../../data/dummyData';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  private data: any[] = data;
  todaysData: any = {
    anniverseries: [],
    birthdays: [],
    welcomes: [],
  };
  getFilteredData() {
    console.log('called');
    this.data.forEach((item) => {
      let today = new Date();
      let startTime = new Date(item.start_time);
      let endTime = new Date(item.end_time);
      if (today >= startTime && today <= endTime) {
        if (item.category === 'anniversary') {
          this.todaysData.anniverseries?.push(item);
        } else if (item.category === 'birthday') {
          this.todaysData.birthdays?.push(item);
        } else if (item.category === 'welcome') {
          this.todaysData.welcomes?.push(item);
        }
      }
    });
    return this.todaysData;
  }

  private currentCategorySubject = new BehaviorSubject<string>('anniversary');
  currentCategory$: Observable<string> =
    this.currentCategorySubject.asObservable();

  private currentDataSubject = new Subject<any>();
  currentData$: Observable<string> = this.currentDataSubject.asObservable();

  updateCategory(newCategory: string) {
    this.currentCategorySubject.next(newCategory);
  }

  updateData(data: any) {
    this.currentDataSubject.next(data);
  }
}
