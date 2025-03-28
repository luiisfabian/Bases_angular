import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {

  counter = 10;
  counterSignal = signal(10);


  increment(value: number) {
    this.counter = this.counter + value;
    this.counterSignal.update(currentValue => currentValue + value)
  }

  decrement(value: number) {
    this.counter = this.counter - value;
    this.counterSignal.update(currentValue => currentValue - value)

  }

  reset(){
    this.counter = 10
    this.counterSignal.set(0)
  }
}
