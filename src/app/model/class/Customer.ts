export class Customer {
       userId: number;
       userName: string;
       emailId: string;
       fullName: string;
       role: string;
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
       departmentId: number;
       departmentName: string;
       departmentLogo: string;


       constructor() {
              this.departmentId = 0;
              this.departmentName = '';
              this.departmentLogo = '';
       }
}
export interface IDepartmentList {
       departmentId: number,
       departmentName: string,
       departmentLogo: string,

}