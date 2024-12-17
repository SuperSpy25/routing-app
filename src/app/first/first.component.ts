import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {

async buttonPress() {
constructor(private http: HttpClient) {}
  const response = this.http.get<any>('https://pokeapi.co/api/v2/pokimon/ditto')
  const result = await firstValueFrom(response)
  console.log ({data: result});
  }

}
