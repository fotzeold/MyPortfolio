import './main.scss';

const Main = () => {
	const textList = [
		'Програмування – це не наука, а ремесло',
		'Програма, яка не тестувалася, не є робочою',
		'Якщо оптимізувати все, що можна, ви будете вічно нещасним',
		'Ми не можемо перекладати свої помилки на використовувані технології',
		'Спосіб використання інтелекту важливіший, ніж його рівень',
	];

	return (
		<main>
			<div className="wrapper">
				<h1>Frontend <br /> engineer</h1>
				<span>Цитата дня:</span>
				<div className="boxForText">
					<h2>{textList[Math.round(Math.random() * (4 - 0) + 0)]}</h2>
				</div>
			</div>
		</main>
	)
}

export default Main;