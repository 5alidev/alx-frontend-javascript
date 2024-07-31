/// <reference path="Teacher.ts" />
/// <reference path="Subjects.ts" />

namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class JavaClass extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      if(this.teacher?.experienceTeachingJava) {
        return `Available Teacher: ${this.teacher}`;
	}
	else {
	  return 'No available teacher';
	}
    }
  }  
}
