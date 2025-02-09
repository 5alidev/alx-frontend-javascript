/// <reference path="Teacher.ts" />
/// <reference path="Subjects.ts" />

namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      if (this.teacher?.experienceTeachingReact) {
        return `Available Teacher: ${this.teacher}`;
	}
	else {
	  return 'No available teacher';
	}

    }
  }
}
