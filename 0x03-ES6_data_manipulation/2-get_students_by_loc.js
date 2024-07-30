const getStudentsByLocation = (students, city) => {
  const arr = students.filter((student) => student.location === city);
  return arr;
};

export default getStudentsByLocation;
