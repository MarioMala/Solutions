/** @format */
export function sendSolution (title, content, URL, module) {
	console.log(URL + module);
	fetch(URL + module, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify({
			title: title,
			content: content,
			create_at: new Date().toLocaleDateString(),
		}),
	});
	fetch('http://localhost:3000/srs', {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify({
			title: 'Testowy tytul',
			content: 'testowy content',
			create_at: new Date().toLocaleDateString(),
		}),
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
			fetch('http://localhost:3000/srs', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify({
					title: 'Testowy tytul',
					content: 'testowy content',
					create_at: new Date().toLocaleDateString(),
				}),
			});
			break;
		case 'SCM':
			fetch('http://localhost:3000/scm', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify({
					title: 'Testowy tytul',
					content: 'testowy content',
					create_at: new Date().toLocaleDateString(),
				}),
			});
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

