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
import { PostApiComponent } from './components/api-integration/post-api/post-api.component';
import { LifecycleEventComponent } from './components/lifecycle-event/lifecycle-event.component';
import { NgTemplateComponent } from './components/directive/ng-template/ng-template.component';
import { NgContainerComponent } from './components/directive/ng-container/ng-container.component';
import { ViewChildComponent } from './components/decorator/view-child/view-child.component';
import { LayoutComponent } from './components/layout/layout.component';
import { authGuard } from './service/auth.guard';
import { SignalComponent } from './components/signal/signal.component';
export const routes: Routes = [
       {
              path: '', //Default Route
              redirectTo: 'login',
              pathMatch: 'full'
       },
       {
              path: 'login',
              component: LoginComponent
       },
       {
              path: '',
              component: LayoutComponent,
              children: [
                     {
                            path: 'register',
                            component: RegisterComponent
                     },
                     {
                            path: 'data-binding',
                            component: DataBindingComponent,
                            canActivate: [authGuard]
                     },
                     {
                            path: 'add-emp',
                            component: AddEmployeeComponent,
                            canActivate:[authGuard]
                     },
                     {
                            path: 'emp-list',
                            component: EmployeeListComponent,
                            canActivate:[authGuard]
                     },
                     {
                            path: 'structural-dir',
                            component: StructuralDirComponent,
                            canActivate:[authGuard]
                     },
                     {
                            path: 'ng-template',
                            component: NgTemplateComponent,
                            canActivate:[authGuard]
                     },
                     {
                            path: 'ng-container',
                            component: NgContainerComponent,
                            canActivate:[authGuard]
                     },
                     {
                            path: 'view-child',
                            component: ViewChildComponent,
                            canActivate:[authGuard]
                     },
                     {
                            path: 'attributedirective',
                            component: AttributeDirectiveComponent
                     },
                     {
                            path: 'pipe',
                            component: PipeComponent,
                            canActivate:[authGuard]
                     },
                     {
                            path: 'get-api',
                            component: GetApiComponent,
                            canActivate:[authGuard]

                     },
                     {
                            path: 'post-api',
                            component: PostApiComponent,
                            canActivate:[authGuard]
                     },
                     {
                            path: 'life-cycle',
                            component: LifecycleEventComponent,
                            canActivate:[authGuard]
                     },
                     {
                            path: 'signal',
                            component: SignalComponent,
                            canActivate:[authGuard]
                     }
              ]
       },


];
