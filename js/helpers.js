/** @format */
export function sendNewSolution(URL, inputModule, inputTitle, inputContent) {
	let module = inputModule.value;
	let title = inputTitle.value;
	let content = inputContent.value;

	const newSolution = {
		title: title,
		content: content,
		create_at: new Date().toLocaleDateString(),
	};

	fetch(`${URL}${module}`, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(newSolution),
	});
}

export function openModal(element, img) {
	element.classList.toggle('active');

	element.classList.contains('active')
		? (img.src = './assets/icons/close.png')
		: (img.src = './assets/icons/add.png');
}

export function choiceModule(e) {
	switch (e.target.value) {
		case 'SRS':
			console.log('Wybrano modul SRS');
			break;
		case 'SCM':
			console.log('Wybrano modul SCM');
			break;
		case 'SOK':
			console.log('Wybrano modul SOK');
			break;
		case 'KDW':
			console.log('Wybrano modul KDW');
			break;
		case 'SQL':
			console.log('Wybrano modul SQL');
			break;
		case 'ERU':
			console.log('Wybrano modul ERU');
			break;
		case 'SCD':
			console.log('Wybrano modul SCD');
			break;
		case 'SEK':
			console.log('Wybrano modul SEK');
			break;
		case 'SKJ':
			console.log('Wybrano modul SKJ');
			break;
		case 'SLAB':
			console.log('Wybrano modul SLAB');
			break;
		case 'SOP':
			console.log('Wybrano modul SOP');
			break;
		case 'SZYK3':
			console.log('Wybrano modul SZYK3');
			break;
		case 'WADM':
			console.log('Wybrano modul WADM');
			break;

		default:
			console.log('Wybierz modul');
			break;
	}
}
