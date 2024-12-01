import { DepartmentService } from './../service/department.service';
import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  firstName: string = "this is a demo sentences";
  currentdate: Date = new Date();
  currentTime: Observable<Date> = new Observable<Date>;
  currentRole: string = '';

  constructor(private deptService: DepartmentService) {
    this.currentTime = interval(1000).pipe(map(() => new Date()));
    this.deptService.onRoleChange$.subscribe((role: string) => {
      //debugger;
      this.currentRole = role;
    });
  }
}
