const getListStudentIds = (arr) => {
  if (arr.constructor !== Array) {
    return [];
  }
  const arrIds = arr.map((obj) => obj.id);
  return arrIds;
};

export default getListStudentIds;
