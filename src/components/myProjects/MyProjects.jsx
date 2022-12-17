import { useState, useEffect } from 'react';

import GetApiRepo from '../services/GetApiRepo';
import Spinner from '../spinner/Spinner';

import './my-projects.scss';

const MyProjects = () => {
	const { getRepoInfo } = GetApiRepo();
	const [data, setData] = useState(null);

	const randomColor = () => Math.floor(Math.random() * (240 - 20) + 20);

	useEffect(() => {
		getRepoInfo()
			.then(data => data.sort((a, b) => b.id - a.id))
			.then(setData)
	}, [])

	if (data) {
		return (
			<section className='my-projects'>
				<h2>Останній проект</h2>
				<div className="last-project">
					<div className="project-wrapper">
						<div
							className="project__image"
							style={{
								backgroundImage: `linear-gradient(43deg, 
										rgba(${randomColor()},${randomColor()},${randomColor()}) 0%, 
										rgba(${randomColor()},${randomColor()},${randomColor()}) 46%, 
										rgba(${randomColor()},${randomColor()},${randomColor()}) 100%`
							}}
						>
							<span>{data[0].name}</span>
						</div>
						<div className="last-project__info project__info">
							<h3 className="project__title">
								{data[0].name}
							</h3>
							<p className="project__descr">
								{data[0].description}
							</p>
							<a href={data[0].url} className='project__btn btn btn-outline-primary'>Code</a>
						</div>
					</div>
				</div>
				<h2>Всі проекти</h2>
				<div className="all-projects">
					{data.map((element, i) => {
						if (0 == i) return;
						return (
							<div key={element.id} className="current-project project-wrapper">
								<div
									className="project__image"
									style={{
										backgroundImage: `linear-gradient(43deg, 
										rgba(${randomColor()},${randomColor()},${randomColor()}) 0%, 
										rgba(${randomColor()},${randomColor()},${randomColor()}) 46%, 
										rgba(${randomColor()},${randomColor()},${randomColor()}) 100%`
									}}
								>
									<span>{element.name}</span>
								</div>
								<div className="current-project__info project__info">
									<h3 className="project__title">
										{element.name}
									</h3>
									<p className="project__descr">
										{element.description}
									</p>
									<a href={element.url} className='project__btn btn btn-outline-primary'>Code</a>
								</div>
							</div>
						)
					})}
				</div>
			</section>
		)
	} else {
		return (
			<Spinner />
		)
	}
}

export default MyProjects;