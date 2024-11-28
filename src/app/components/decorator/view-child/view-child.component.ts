import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { AlertComponent } from '../../../reusableComponent/alert/alert.component';

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent implements AfterViewInit {
  @ViewChild('txtName') textBox?: ElementRef;
  @ViewChild(AlertComponent) alertCom?: AlertComponent;

  ngAfterViewInit(): void {
    const value = this.textBox?.nativeElement.value;
     //debugger;
    const alertMode = this.alertCom?.alertMode;
    console.log(alertMode);
  }
}
