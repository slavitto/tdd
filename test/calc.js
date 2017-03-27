'use strict';
const expect = require('chai').expect;
const Calculator = require('../classes/calculator.js');

function createCalculator() {
	return new Calculator();
}

describe('calculator',() => {

	it('should return 0 if input is empty', () => {

		let calculator = createCalculator();
		let sum = calculator.add('');
		expect(sum).to.equal(0);
	});

	it('should return 1 if input is 1', () => {

		let calculator = createCalculator();
		let sum = calculator.add('1');
		expect(sum).to.equal(1);

	});

	it('should return input number', () => {

		let calculator = createCalculator();
		let sum = calculator.add('2');
		expect(sum).to.equal(2);

	});

	it('should return sum of several numbers', () => {

		let calculator = createCalculator();
		let sum = calculator.add('1,2,3');
		expect(sum).to.equal(1 + 2 + 3);

	});

});