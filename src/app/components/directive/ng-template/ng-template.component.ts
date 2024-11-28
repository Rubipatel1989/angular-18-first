import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-template',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.css'], // Correct the key to 'styleUrls'
})
export class NgTemplateComponent {
  isUserLoggedIn: Boolean = false;
  loggedUserName: String = 'Pawan Kumar';

  @ViewChild('dynamicTemplate') dynamicTemplate: TemplateRef<any> | undefined;
  @ViewChild('dynamicContainer', { read: ViewContainerRef }) dynamicContainer: ViewContainerRef | undefined;

  loadTemplate() {
    if (this.dynamicTemplate) {

      this.dynamicContainer?.createEmbeddedView(this.dynamicTemplate);
    }
  }
}
