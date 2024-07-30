const hasValuesFromArray = (set, arr) => {
  let exist = true;
  arr.forEach((element) => {
    if (!set.has(element)) {
      exist = false;
    }
  });
  return exist;
};

export default hasValuesFromArray;
