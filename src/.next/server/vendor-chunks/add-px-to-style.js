/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/add-px-to-style";
exports.ids = ["vendor-chunks/add-px-to-style"];
exports.modules = {

/***/ "(ssr)/../node_modules/add-px-to-style/index.js":
/*!************************************************!*\
  !*** ../node_modules/add-px-to-style/index.js ***!
  \************************************************/
/***/ ((module) => {

eval("/* The following list is defined in React's core */\nvar IS_UNITLESS = {\n  animationIterationCount: true,\n  boxFlex: true,\n  boxFlexGroup: true,\n  boxOrdinalGroup: true,\n  columnCount: true,\n  flex: true,\n  flexGrow: true,\n  flexPositive: true,\n  flexShrink: true,\n  flexNegative: true,\n  flexOrder: true,\n  gridRow: true,\n  gridColumn: true,\n  fontWeight: true,\n  lineClamp: true,\n  lineHeight: true,\n  opacity: true,\n  order: true,\n  orphans: true,\n  tabSize: true,\n  widows: true,\n  zIndex: true,\n  zoom: true,\n\n  // SVG-related properties\n  fillOpacity: true,\n  stopOpacity: true,\n  strokeDashoffset: true,\n  strokeOpacity: true,\n  strokeWidth: true\n};\n\nmodule.exports = function(name, value) {\n  if(typeof value === 'number' && !IS_UNITLESS[ name ]) {\n    return value + 'px';\n  } else {\n    return value;\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL2FkZC1weC10by1zdHlsZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBIiwic291cmNlcyI6WyIvVXNlcnMvc2luL3JlcG9zL3Rvb2xzLWJ5LXZpamF5L25vZGVfbW9kdWxlcy9hZGQtcHgtdG8tc3R5bGUvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogVGhlIGZvbGxvd2luZyBsaXN0IGlzIGRlZmluZWQgaW4gUmVhY3QncyBjb3JlICovXG52YXIgSVNfVU5JVExFU1MgPSB7XG4gIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiB0cnVlLFxuICBib3hGbGV4OiB0cnVlLFxuICBib3hGbGV4R3JvdXA6IHRydWUsXG4gIGJveE9yZGluYWxHcm91cDogdHJ1ZSxcbiAgY29sdW1uQ291bnQ6IHRydWUsXG4gIGZsZXg6IHRydWUsXG4gIGZsZXhHcm93OiB0cnVlLFxuICBmbGV4UG9zaXRpdmU6IHRydWUsXG4gIGZsZXhTaHJpbms6IHRydWUsXG4gIGZsZXhOZWdhdGl2ZTogdHJ1ZSxcbiAgZmxleE9yZGVyOiB0cnVlLFxuICBncmlkUm93OiB0cnVlLFxuICBncmlkQ29sdW1uOiB0cnVlLFxuICBmb250V2VpZ2h0OiB0cnVlLFxuICBsaW5lQ2xhbXA6IHRydWUsXG4gIGxpbmVIZWlnaHQ6IHRydWUsXG4gIG9wYWNpdHk6IHRydWUsXG4gIG9yZGVyOiB0cnVlLFxuICBvcnBoYW5zOiB0cnVlLFxuICB0YWJTaXplOiB0cnVlLFxuICB3aWRvd3M6IHRydWUsXG4gIHpJbmRleDogdHJ1ZSxcbiAgem9vbTogdHJ1ZSxcblxuICAvLyBTVkctcmVsYXRlZCBwcm9wZXJ0aWVzXG4gIGZpbGxPcGFjaXR5OiB0cnVlLFxuICBzdG9wT3BhY2l0eTogdHJ1ZSxcbiAgc3Ryb2tlRGFzaG9mZnNldDogdHJ1ZSxcbiAgc3Ryb2tlT3BhY2l0eTogdHJ1ZSxcbiAgc3Ryb2tlV2lkdGg6IHRydWVcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgaWYodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiAhSVNfVU5JVExFU1NbIG5hbWUgXSkge1xuICAgIHJldHVybiB2YWx1ZSArICdweCc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59OyJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/add-px-to-style/index.js\n");

/***/ })

};
;