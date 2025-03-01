"use strict"
const { makeTypedQueryFactory: $mkFactory } = require("../runtime/library")
exports.getUsers = /*#__PURE__*/ $mkFactory("SELECT * FROM \"User\"")
