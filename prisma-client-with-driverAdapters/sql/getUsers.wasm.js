"use strict"
const { makeTypedQueryFactory: $mkFactory } = require("../runtime/wasm.js")
exports.getUsers = /*#__PURE__*/ $mkFactory("SELECT * FROM \"User\"")
