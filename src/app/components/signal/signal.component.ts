import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalComponent {
  firstName = signal("Pawan");
  lastName = signal("Kumar");
  fullName = computed(()=>this.firstName() + " " + this.lastName());
  rollNo = signal<number>(94586);
  courseName: String = 'Java';

  constructor() {
    const fName = this.firstName();
    setTimeout(() => {
      this.firstName.set('Radhe Kaka');
      this.courseName = 'Python';
    }, 3000);
  }
  changeName() {
    this.firstName.set('Ramu Kaka');
  }
  changeFirstName(){
    this.firstName.set('Pancham');
  }
  changeLastName(){
    this.lastName.set('Data');
  }
}
