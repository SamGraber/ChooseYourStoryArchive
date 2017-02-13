"use strict";
var socketio = require('socket.io');
var socketioJwt = require('socketio-jwt');
var request = require('request');
var secret = 'rrd3E3Oa5UJbD3cXB-aQmNGh3WGo7PhoH0l88myi8Hr8drGxYHuzBYlNyec2vpjh';
function config(server) {
    socketio.listen(server).on('connection', socketioJwt.authorize({
        secret: Buffer(JSON.stringify(secret), 'base64'),
        timeout: 15000,
    })).on('authenticated', function (socket) {
        console.log('Connected');
        console.log(socket.decoded_token);
        console.log(socket.handshake);
        console.log(socket);
        var options = {
            method: 'GET',
            url: 'https://samgraber.auth0.com/api/v2/users',
            headers: { authorization: 'Bearer ' + secret },
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