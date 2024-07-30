const cleanSet = (set, startString) => {
  let str = '';
  if (startString === '') {
    return '';
  }
  set.forEach((e) => {
    if (e.startsWith(startString)) {
      if (str) {
        str += `-${e.slice(startString.length)}`;
      } else {
        str += e.slice(startString.length);
      }
    }
  });
  return str;
};

export default cleanSet;
