const form = document.querySelector('#form_for_live'),
	result = document.querySelector('.result');

let title, house, age;

const mainFunction = () => {
	if (!title || !house) {
		result.textContent = `____`;
		return;
	}
	console.log(title);
	console.log(house);
	//console.log(age);
	const persent = Math.round((100 / +title) * +house);
	return (result.textContent = `${persent}%`);
};

mainFunction();

function getDynamicInformation(selector) {
	const input = document.querySelector(selector);

	input.addEventListener('input', () => {
		if (input.value.match(/\D/g)) {
			input.style.border = '3px solid red';
		} else {
			input.style.border = 'none';
		}

		switch (input.getAttribute('id')) {
			case 'title':
				title = +input.value;
				break;
			case 'house':
				house = +input.value;
				break;
			case 'age':
				age = +input.value;
				break;
		}
		mainFunction();
	});
}
getDynamicInformation('#title');
getDynamicInformation('#house');
getDynamicInformation('#age');
