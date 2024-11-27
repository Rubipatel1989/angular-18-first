import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-button',
  standalone: true,
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css'
})
export class MyButtonComponent {
  @Input() btnText: String = '';
  @Input() btnClass: String = '';
  @Output() onBtnClick = new EventEmitter<any>();
  onClick() {
    this.onBtnClick.emit('Hi I am from child');
  }
}
