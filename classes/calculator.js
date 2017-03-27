module.exports = class Calculator {

	get defaultValue () {
		return 0;
	}

	add(input) {

		if(this.inputIsEmpty(input)) {
			return this.defaultValue;
		}

		if(input.length == 1) {
			return parseInt(input);
		} 

		if(input.length > 1) {
			let values = input.split(',');
			for(var i = 0, sum = 0; i < values.length; i++) {
				sum += parseInt(values[i]);
			}
			return sum;
		}
	}

	inputIsEmpty(input){
		return input.length === 0;
	}
}