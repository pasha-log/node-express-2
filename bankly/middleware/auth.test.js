// TEST BUG #6: Testing if proper handling of token verification happens.
'use strict';

process.env.NODE_ENV = 'test';

const jwt = require('jsonwebtoken');
const { authUser } = require('./auth');

const { SECRET_KEY } = require('../config');
const testJwt = jwt.sign({ username: 'test', admin: false }, SECRET_KEY);
const badJwt = jwt.sign({ username: 'test', admin: false }, 'wrong');

describe('authUser', function() {
	test('works: no header', function() {
		req.body._token = testJwt;
		expect(authUser(req, res, next)).toEqual({});
	});

	test('works: invalid token', function() {
		req.body._token = badJwt;
		authUser(req, res, next);
		expect(response.statusCode).toBe(401);
	});
});
