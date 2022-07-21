const form = document.querySelector('#form_for_live'),
	result = document.querySelector('.result');

//let title, house, age;

//console.log(document.querySelector('#age').getAttribute('id'));
//console.log(document.querySelector('#age').value);

const mainFunction = () => {
	if (!title || !house || !age) {
		result.textContent = `____`;
		return;
	}
	//console.log(title);
	//console.log(house);
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
				age = input.value;
				const t = Date.parse(new Date()) - Date.parse(age);

				console.log(msInHouse(t));
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

//*********************************88 */
//console.log(t);
//if (t <= 0) {
//	days = 0;
//	hours = 0;
//	minutes = 0;
//	seconds = 0;
//} else {
//	(days = Math.floor(t / (1000 * 60 * 60 * 24))),
//		(hours = Math.floor((t / (1000 * 60 * 60)) % 24)),
//		(minutes = Math.floor((t / 1000 / 60) % 60)),
//		(seconds = Math.floor((t / 1000) % 60));
//}

//console.log(`Дней${days}`);
//console.log(`Часов${hours + 3}`);
////console.log(minutes);
////console.log();

//return {
//	total: t,
//	days,
//	hours,
//	minutes,
//	seconds,
//};

//*************************** */
