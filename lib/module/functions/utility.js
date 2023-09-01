export async function onLayoutToggle(ref, callback) {
  if (ref) {
    var _ref$current;
    (_ref$current = ref.current) === null || _ref$current === void 0 || _ref$current.measure((x, y, width, height, px, py) => {
      const measure = {
        x: px,
        y: py,
        width,
        height
      };
      callback(measure);
    });
  }
}
export function sortData(countries, searchValue) {
  return countries.sort((a, b) => searchValue ? a.name.toLowerCase() < b.name.toLowerCase() ? -1 : a.name.toLowerCase().startsWith(searchValue.toLowerCase()) ? -1 : a.name.toLowerCase() === searchValue.toLowerCase() ? -1 : a.alpha2Code.toLowerCase() === searchValue.toLowerCase() ? -1 : a.callingCode === searchValue ? -1 : 1 : a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 0);
}
//# sourceMappingURL=utility.js.map