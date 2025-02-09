import { Subjects } from './subjects/Subject';
import { Teacher } from './subjects/Teacher';

namespace Subjects {
  export const cpp = new Cpp();
  export const java = new Java();
  export const react = new React();

  export const cTeacher: Teacher = {
    experienceTeachingC: 10,
  };

  cpp.setTeacher(cTeacher);
  console.log('C++');
  console.log(cpp.getRequirements());
  console.log(cpp.getAvailableTeacher());

  java.setTeacher(cTeacher);
  console.log('Java');
  console.log(java.getRequirements());
  console.log(java.getAvailableTeacher());

  react.setTeacher(cTeacher);
  console.log('React');
  console.log(react.getRequirements());
  console.log(react.getAvailableTeacher());
}
