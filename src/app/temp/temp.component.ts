import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temp',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css'],
})
export class TempComponent {
  celsius = 0;
  fahrenheit = 32;
  show!: string;

  updateShow() {
    if (this.celsius <= 0) {
      this.show = 'Freezing 🧊';
    } else if (this.celsius < 15) {
      this.show = 'Cold 🥶';
    } else if (this.celsius < 20) {
      this.show = 'Cool 🌬️';
    } else if (this.celsius <= 25) {
      this.show = 'Normal 🙂';
    } else {
      this.show = 'Hot 🔥☀️';
    }
  }

  convertToFahrenheit() {
    this.fahrenheit = parseFloat(((this.celsius * 9) / 5 + 32).toFixed(2));
    this.updateShow();
  }

  convertToCelsius() {
    this.celsius = parseFloat((((this.fahrenheit - 32) * 5) / 9).toFixed(2));
    this.updateShow();
  }
}
