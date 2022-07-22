//****HELPER */

let yearsToHours = 0,
	monthsToHours = 0,
	weeksToHours = 0,
	daysToHours = 0,
	sumHourse;

const resultHelper = document.querySelector('.helper__result-allHouse span'),
	resultHouseInput = document.querySelector('#house'),
	resultYearsToHours = document.querySelector('.helper__yearsToHours'),
	resultMonthsToHours = document.querySelector('.helper__monthsToHours'),
	resultWeeksToHours = document.querySelector('.helper__weeksToHours'),
	resultDaysToHours = document.querySelector('.helper__daysToHours');

const funcHelper = () => {
	if (
		yearsToHours >= 0 ||
		monthsToHours >= 0 ||
		weeksToHours >= 0 ||
		daysToHours >= 0
	) {
		sumHourse = yearsToHours + monthsToHours + weeksToHours + daysToHours;
		resultHouseInput.value = sumHourse;
		getDynamicInformation('#house');

		return (resultHelper.textContent = `В сумме: ${sumHourse} часов`);
	}
};

funcHelper();

function getDynamicInformationHelper(selector) {
	const input = document.querySelector(selector);

	input.addEventListener('input', () => {
		switch (input.getAttribute('id')) {
			case 'yearsToHours':
				res = input.value;
				yearsToHours = funcYearsToHours(res);
				resultYearsToHours.textContent = `Это ${yearsToHours} часов`;
				break;

			case 'monthsToHours':
				res = +input.value;
				monthsToHours = funcMonthsToHours(res);
				resultMonthsToHours.textContent = `Это ${monthsToHours} часов`;
				break;
			case 'weeksToHours':
				res = input.value;
				weeksToHours = funcWeeksToHours(res);
				resultWeeksToHours.textContent = `Это ${weeksToHours} часов`;
				break;
			case 'daysToHours':
				res = +input.value;
				daysToHours = funcDaysToHours(res);
				resultDaysToHours.textContent = `Это ${daysToHours} часа`;
				break;
		}
		funcHelper();
		mainFunction();
	});
}
getDynamicInformationHelper('#yearsToHours');
getDynamicInformationHelper('#monthsToHours');
getDynamicInformationHelper('#weeksToHours');
getDynamicInformationHelper('#daysToHours');

const funcYearsToHours = (value) => {
	return value * 8760;
};
const funcMonthsToHours = (value) => {
	return value * 708;
};
const funcWeeksToHours = (value) => {
	return value * 168;
};
const funcDaysToHours = (value) => {
	return value * 24;
};

//live calc
const form = document.querySelector('#form_for_live'),
	result = document.querySelector('.result'),
	valueHouse = document.querySelector('#house');

let title = 'title',
	house,
	age,
	persentVal;

const mainFunction = () => {
	if (!title || !age || isNaN(age)) {
		result.textContent = `Заполните все данные...`;
		return;
	}
	if (age < 0) {
		result.textContent = `Вы ввели дату, которая еще не настала`;
		return;
	}
	house = +valueHouse.value;
	if (house < 0) {
		result.textContent = `Вы ввели отрицательное кол-во часов`;
		return;
	}
	const persent = ((100 / +age) * +house).toFixed(4);
	persentVal = persent;

	if (persent > 100) {
		result.textContent = `Кол-во часов, которое вы ввели, превышает кол-во часов, которое вы прожили`;
		return;
	}

	funDiagr(persentVal, title);
	return (result.textContent = `Ты потратил(ла) на ${title}: ${persent}% своей жизни!`);
};

mainFunction();

function getDynamicInformation(selector) {
	const input = document.querySelector(selector);

	input.addEventListener('input', () => {
		switch (input.getAttribute('id')) {
			case 'title':
				title = input.value;
				break;
			case 'house':
				if (!input.value) {
					house = +sumHourse;
					break;
				}
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

//****chart/

const funDiagr = (persentVal, nameVal) => {
	const placeChart = document.querySelector('.chart');

	placeChart.innerHTML = `
	<canvas
						class="myChart"
						id="myChart"
						width="100px"
						height="100px"
					></canvas>
	
	`;

	const ctx = document.getElementById('myChart').getContext('2d');

	const myChart = new Chart(ctx, {
		type: 'pie',
		data: {
			labels: ['Жизнь', `${nameVal}`],
			datasets: [
				{
					label: 'My First Dataset',
					data: [100 - persentVal, persentVal],
					backgroundColor: ['#896b73', '#e5dbdc'],
					hoverOffset: 4,
				},
			],
			option: {},
		},
	});

	return myChart;
};

funDiagr(persentVal, title);
