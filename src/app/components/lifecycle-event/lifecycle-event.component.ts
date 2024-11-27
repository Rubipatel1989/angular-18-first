import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-event',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle-event.component.html',
  styleUrl: './lifecycle-event.component.css'
})
export class LifecycleEventComponent implements OnInit, DoCheck, AfterViewChecked, AfterViewInit, AfterContentChecked, AfterContentInit, OnDestroy, OnChanges {

  firstName: String;
  constructor() {
    this.firstName = '';
    console.log("This is constructer");
  }

  ngOnInit(): void {
    console.log("This is ngOnIt");
  }
  ngDoCheck(): void {
    console.log("This is docheck");
  }
  ngAfterViewChecked(): void {
    console.log("This is ngAfterViewChecked");
  }
  ngAfterViewInit(): void {
    console.log("This is ngAfterViewInit");
  }
  ngAfterContentChecked(): void {
    console.log("This is ngAfterContentChecked");
  }
  ngAfterContentInit(): void {
    console.log("This is ngAfterContentInit");
  }
  ngOnDestroy(): void {
    console.log("This is ngOnDestroy");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('this.ngOnChanges');
  }
}
