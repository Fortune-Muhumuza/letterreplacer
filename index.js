module.exports = function tiny(string) {
  if (typeof string !== "string") throw new TypeError("Tiny wants a string!");
  return string.replace(/\s/g, "");
};

export const replaceArrFirst = (arr, replaceWith) => {
  let newArr = [];
  arr.forEach((el) => {
    const separated = el.split("");
    separated[0] = replaceWith;
    const joined = separated.join("");
    newArr.push(joined);
  });
  return newArr;
};


//console.log(replaceArrFirst(["abc", "def", "ghi"], "*"))