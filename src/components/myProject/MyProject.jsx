import { useEffect, useState } from "react";

import Spinner from "../spinner/Spinner";
import GetApiRepo from "../services/GetApiRepo";

import './myproject.scss';
import arrow from '../../img/icon/Arrow.svg'
import { objImg } from "../services/ImportsImg";

const MyProject = () => {
	const [reposes, setRepo] = useState([]);
	const [loading, setLoading] = useState(true)

	const service = new GetApiRepo();

	const transformData = (elem) => {
		return {
			id: elem.id,
			name: elem.name,
			description: elem.description,
			url: elem.clone_url
		}
	}

	const getRepo = () => {
		service
			.getResours()
			.then(arr => setRepo(arr.map(transformData).sort((a, b) => a.id < b.id ? 1 : -1)))
			.then(setLoading(false))
	}

	useEffect(() => {
		getRepo();
	}, [])

	const Result = loading ? <Spinner /> : <Content reposes={reposes} />;

	return Result;
}

const Content = (props) => {
	if (props.reposes[0]) {
		const data = props.reposes
		return (
			<section>
				<div className="last_project">
					<h2>Останній проект:</h2>
					<div className="row">
						<div className="last_project-info project-info">
							<h3>{data[0].name}</h3>
							<p>{data[0].description}</p>
							<a href="" className="last_project-github github">
								<span>Перейти на GitHub</span>
								<img src={arrow} alt="" />
							</a>
						</div>
						<div className="last_project-image project-image">
							<img src={objImg[`${data[0].id}`]} alt="" />
						</div>
					</div>
				</div>
				<div className="all_project">
					<h2>Минулі проекти:</h2>
					{
						data.map((elem, index) => {
							if (index == 0) return

							return (
								<div key={index} className="row all_project-block">
									<div className="all_project-info project-info">
										<h3>{elem.name}</h3>
										<p>{elem.description}</p>
										<a href="" className="all_project-github github">
											<span>Перейти на GitHub</span>
											<img src={arrow} alt="" />
										</a>
									</div>
									<div className="all_project-image project-image">
										<img src={objImg[`${elem.id}`]} alt="" />
									</div>
								</div>
							)
						})
					}
				</div>
			</section>
		)
	}

}

export default MyProject;