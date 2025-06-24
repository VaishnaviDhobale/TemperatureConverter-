import { Component } from '@angular/core';
import { TempComponent } from './temp/temp.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [TempComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'convert-temp';
}
