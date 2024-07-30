const getStudentIdsSum = (arr) => {
  const sum = arr.reduce((idsSum, student) => idsSum + student.id, 0);
  return sum;
};

export default getStudentIdsSum;
