import { Subjects } from './Teacher';

namespace Subjects {
  export class Subject {
    teacher: Subjects.Teacher;

    setTeacher(teacher: Subjects.Teacher) {
      this.teacher = teacher;
    }
  }
}
