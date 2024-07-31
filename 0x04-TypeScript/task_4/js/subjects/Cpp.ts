/// <reference path="Teacher.ts" />
/// <reference path="Subjects.ts" />

namespace Subjects {
   export interface Teacher {
     experienceTeachingC?: number;
   }

   export class Cpp extends Subject {
     getRequirements(): void {
       return 'Here is the list of requirements for Cpp';
     }

     getAvailableTeacher(): string {
       if (this.teacher?.experienceTeachingC) {
         return `Available Teacher: ${this.teacher.firstName}`;
       }
       else {
         return 'No available teacher';
       } 	 
     }
   }
}
