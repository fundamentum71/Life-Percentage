const form = document.querySelector('#form_for_live'),
	result = document.querySelector('.result');

let title, house, age;

const mainFunction = () => {
	if (!title || !house || !age || isNaN(age)) {
		result.textContent = `Заполните все данные...`;
		return;
	}

	const persent = ((100 / +age) * +house).toFixed(4);
	return (result.textContent = `Ты потратил(ла) на ${title}: ${persent}% своей жизни!`);
};

mainFunction();

function getDynamicInformation(selector) {
	const input = document.querySelector(selector);

	input.addEventListener('input', () => {
		//if (input.value.match(/\D/g)) {
		//	input.style.border = '3px solid red';
		//} else {
		//	input.style.border = 'none';
		//}

		switch (input.getAttribute('id')) {
			case 'title':
				title = input.value;
				break;
			case 'house':
				house = +input.value;
				break;
			case 'age':
				ageVal = input.value;
				const t = Date.parse(new Date()) - Date.parse(ageVal);
				age = msInHouse(t);
				break;
		}
		mainFunction();
	});
}
getDynamicInformation('#title');
getDynamicInformation('#house');
getDynamicInformation('#age');

const msInHouse = (value) => {
	const pureHouse = Math.floor(value / (1000 * 60 * 60));
	return pureHouse;
};
