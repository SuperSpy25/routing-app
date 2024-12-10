//my-service.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyService {
  private data: any[] = [];

  getData() {
    return this.data;
  }

  addData(item: any) {
    this.data.push(item);
  }
}
export class MyServiceService {
  private data: any[] = [];

  getData() {
    return this.data;
  }

  addData(item: any) {
    this.data.push(item);
  }
}
