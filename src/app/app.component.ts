//app.component.ts

import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MyService } from './services/my-service.service';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'injectible-service-demo';

    items: any[] = [];

    constructor(private myService: MyService) {
        this.items = this.myService.getData();
    }

    addItem() {
        const newItem = { id: Date.now(), value: 'New Item' };
        this.myService.addData(newItem);
        this.items = this.myService.getData();
    }
}
