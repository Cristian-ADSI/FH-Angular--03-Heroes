import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>{{ counter }}</p>
    <button (click)="updateCounter(-1)">-1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="updateCounter(+1)">+1</button>
  `
})

export class CounterComponent {
  public counter: number = 10

  updateCounter(value: number): void {
    this.counter += value
  }
  resetCounter(): void {
    this.counter = 10
  }
}