const timeWord = require('./timeWord');
// import { timeWord } from './timeWord.js';

describe('#timeword', () => {
	test('it is a function', () => {
		expect(typeof timeWord).toBe('function');
	});

	test('works for 00:00', () => {
		expect(timeWord('00:00')).toEqual('midnight');
	});
	test('works for 00:12', () => {
		expect(timeWord('00:12')).toEqual('twelve twelve am');
	});
	test('works for 01:00', () => {
		expect(timeWord('01:00')).toEqual('one o’clock am');
	});
	test('works for 06:01', () => {
		expect(timeWord('06:01')).toEqual('six oh one am');
	});
	test('works for 06:10', () => {
		expect(timeWord('06:10')).toEqual('six ten am');
	});
	test('works for 06:18', () => {
		expect(timeWord('06:18')).toEqual('six eighteen am');
	});
	test('works for 06:30', () => {
		expect(timeWord('06:30')).toEqual('six thirty am');
	});
	test('works for 10:34', () => {
		expect(timeWord('10:34')).toEqual('ten thirty four am');
	});
	test('works for 12:00', () => {
		expect(timeWord('12:00')).toEqual('noon');
	});
	test('works for 12:09', () => {
		expect(timeWord('12:09')).toEqual('twelve oh nine pm');
	});
	test('works for 23:23', () => {
		expect(timeWord('23:23')).toEqual('eleven twenty three pm');
	});
});
