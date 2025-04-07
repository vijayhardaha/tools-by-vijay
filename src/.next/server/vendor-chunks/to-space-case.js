/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/to-space-case";
exports.ids = ["vendor-chunks/to-space-case"];
exports.modules = {

/***/ "(ssr)/../node_modules/to-space-case/index.js":
/*!**********************************************!*\
  !*** ../node_modules/to-space-case/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar clean = __webpack_require__(/*! to-no-case */ \"(ssr)/../node_modules/to-no-case/index.js\")\n\n/**\n * Export.\n */\n\nmodule.exports = toSpaceCase\n\n/**\n * Convert a `string` to space case.\n *\n * @param {String} string\n * @return {String}\n */\n\nfunction toSpaceCase(string) {\n  return clean(string).replace(/[\\W_]+(.|$)/g, function (matches, match) {\n    return match ? ' ' + match : ''\n  }).trim()\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL3RvLXNwYWNlLWNhc2UvaW5kZXguanMiLCJtYXBwaW5ncyI6IjtBQUNBLFlBQVksbUJBQU8sQ0FBQyw2REFBWTs7QUFFaEM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyIvVXNlcnMvc2luL3JlcG9zL3Rvb2xzLWJ5LXZpamF5L25vZGVfbW9kdWxlcy90by1zcGFjZS1jYXNlL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxudmFyIGNsZWFuID0gcmVxdWlyZSgndG8tbm8tY2FzZScpXG5cbi8qKlxuICogRXhwb3J0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gdG9TcGFjZUNhc2VcblxuLyoqXG4gKiBDb252ZXJ0IGEgYHN0cmluZ2AgdG8gc3BhY2UgY2FzZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gdG9TcGFjZUNhc2Uoc3RyaW5nKSB7XG4gIHJldHVybiBjbGVhbihzdHJpbmcpLnJlcGxhY2UoL1tcXFdfXSsoLnwkKS9nLCBmdW5jdGlvbiAobWF0Y2hlcywgbWF0Y2gpIHtcbiAgICByZXR1cm4gbWF0Y2ggPyAnICcgKyBtYXRjaCA6ICcnXG4gIH0pLnRyaW0oKVxufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/to-space-case/index.js\n");

/***/ })

};
;