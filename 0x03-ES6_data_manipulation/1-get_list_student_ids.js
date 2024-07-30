const getListStudentIds = (arr) => {
  if (!Array.isArray(arr)) {
    return [];
  }
  const arrIds = arr.map((obj) => obj.id);
  return arrIds;
};

export default getListStudentIds;
