export class Customer {
       userId: Number;
       userName: String;
       emailId: String;
       fullName: String;
       role: String;
       address?: String;


       constructor() {
              this.userId = 0;
              this.userName = '';
              this.emailId = '';
              this.fullName = '';
              this.role = '';
       }
}

export class Department {
       departmentId: Number;
       departmentName: String;
       departmentLogo: String;


       constructor() {
              this.departmentId = 0;
              this.departmentName = '';
              this.departmentLogo = '';
       }
}
export interface IDepartmentList {
       departmentId: Number,
       departmentName: String,
       departmentLogo: String,

}