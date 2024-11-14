import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { StructuralDirComponent } from './components/directive/structural-dir/structural-dir.component';
import { AttributeDirectiveComponent } from './components/directive/attribute-directive/attribute-directive.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PipeComponent } from './pipe/pipe.component';
import { GetApiComponent } from './components/api-integration/get-api/get-api.component';
export const routes: Routes = [
       {
              path: 'login',
              component: LoginComponent
       },
       {
              path: 'register',
              component: RegisterComponent
       },
       {
              path: 'data-binding',
              component: DataBindingComponent
       },
       {
              path: 'add-emp',
              component: AddEmployeeComponent
       },
       {
              path: 'emp-list',
              component: EmployeeListComponent
       },
       {
              path: 'structural-dir',
              component: StructuralDirComponent
       },
       {
              path: 'attributedirective',
              component: AttributeDirectiveComponent
       },
       {
              path: 'pipe',
              component: PipeComponent
       },
       {
              path: 'get-users',
              component: GetApiComponent

       },
      
];
