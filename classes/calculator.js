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
			let strings = input.split('\n'), sumStrings = 0, negative = [], values;
			strings.forEach(string => {
				values = string.split(',');
				for(var j = 0, sum = 0; j < values.length; j++) {
					if (values[j]) sum += parseInt(values[j]);
					if(values[j] < 0) negative.push(values[j]);
				// console.log(/\d/.test(values[j]));
				}
				sumStrings += sum;
			});
			if(negative.length > 0) { 
				console.log('Отрицательные числа недопустимы: ' + negative); 
				return false;
			}	else return sumStrings;
		}
	}

	inputIsEmpty(input){
		return input.length === 0;
	}
}