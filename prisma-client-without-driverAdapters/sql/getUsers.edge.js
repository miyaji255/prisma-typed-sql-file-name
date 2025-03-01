"use strict"
const { makeTypedQueryFactory: $mkFactory } = require("../runtime/edge.js")
exports.getUsers = /*#__PURE__*/ $mkFactory("SELECT * FROM \"User\"")
