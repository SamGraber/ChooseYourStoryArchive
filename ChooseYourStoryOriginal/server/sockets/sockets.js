"use strict";
var request = require('request');
var socketio = require('socket.io');
var socketioJwt = require('socketio-jwt');
function config(server) {
    var secret = 'rrd3E3Oa5UJbD3cXB-aQmNGh3WGo7PhoH0l88myi8Hr8drGxYHuzBYlNyec2vpjh';
    socketio.listen(server).on('connection', socketioJwt.authorize({
        secret: Buffer(JSON.stringify(secret), 'base64'),
        timeout: 15000,
    })).on('authenticated', function (socket) {
        console.log('Connected');
        var options = {
            method: 'GET',
            url: 'https://samgraber.auth0.com/api/v2/users',
            headers: { Authorization: 'Bearer ' + secret },
        };
        request(options, function (error, response, body) {
            if (error)
                throw new Error(error);
            console.log(body);
        });
    });
}
exports.config = config;
//# sourceMappingURL=sockets.js.map