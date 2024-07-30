const updateStudentGradeByCity = (students, city, grades) => {
  const studentsOfaCity = students.filter((student) => student.location === city);
  const arr = studentsOfaCity.map((std) => {
    const studentGrade = grades.find((grade) => grade.studentId === std.id);
    return {
      ...std,
      grade: studentGrade ? studentGrade.grade : 'N/A',
    };
  });
  return arr;
};

export default updateStudentGradeByCity;
