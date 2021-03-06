import { Server } from 'node';
import * as request from 'request';
import * as socketio from 'socket.io';
import * as socketioJwt from 'socketio-jwt';

export function config(server: Server) {
	var secret = 'rrd3E3Oa5UJbD3cXB-aQmNGh3WGo7PhoH0l88myi8Hr8drGxYHuzBYlNyec2vpjh';
	socketio.listen(server).on('connection', socketioJwt.authorize({
		secret: Buffer(JSON.stringify(secret), 'base64'),
		timeout: 15000,
	})).on('authenticated', (socket: SocketIO.Socket): void => {
		console.log('Connected');

		const options = { 
			method: 'GET',
			url: 'https://samgraber.auth0.com/api/v2/users',
			headers: { Authorization: 'Bearer ' + secret }, 
		};

		request(options, function (error, response, body) {
			if (error) throw new Error(error);

			console.log(body);
		});
	});
}
