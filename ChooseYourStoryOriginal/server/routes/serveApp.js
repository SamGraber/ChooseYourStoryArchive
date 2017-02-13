"use strict";
var express = require('express');
exports.router = express.Router();
/* GET home page. */
exports.router.get('/*', function (request, response) {
    response.render('../../index.html');
});
//# sourceMappingURL=serveApp.js.map