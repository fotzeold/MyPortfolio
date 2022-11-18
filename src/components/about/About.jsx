import { owner } from '../../services/infoAboutOvner';
import avatar from '../../img/image/about/IMG.JPG'

import './about.scss';

const About = () => {

	return (
		<section className='Info-About-Owner'>
			<div className="main">
				<div className="row">
					<div className="main_image">
						<img src={avatar} alt="Roman-Popovych-Avatar" />
					</div>
					<div className="main_info">
						<h2>Roman Popovych</h2>
						<h3>Frontend Engineer</h3>
						<span>Every day I am closer to my dream</span>
					</div>
				</div>
			</div>

			<div className="content">
				<div className="row">
					<div className="content_left">
						{
							owner.mainInfo.map((elem, index) => {
								return (
									<div key={index} className="content-card">
										<h2>{elem.label}</h2>
										{
											elem.arrayWithInfo.map((e, i) => {
												return (
													<div key={i + 10} className="content-body">
														<div className="row">
															<div className="description">
																<h3>{e.name}</h3>
																<p>{e.description}</p>
															</div>
															<div className="date">
																<span>{e.timeLine}</span>
															</div>
														</div>
													</div>
												)
											})
										}
									</div>
								)
							})
						}
						<div key={9999} className="content-card">
							<h2>My social networks</h2>
							<ul>
								<li><a target="_blank" href="https://t.me/forzeoldgg">Telegram</a></li>
								<li><a target="_blank" href="https://www.facebook.com/roman.popovych.75">Facebook</a></li>
								<li><a target="_blank" href="https://www.instagram.com/forzeold/">Instagram</a></li>
								<li><a target="_blank" href="https://github.com/fotzeold">GitHub</a></li>
							</ul>
						</div>
					</div>
					<div className="content_right">
						{
							owner.secondInfo.map((elem, index) => {
								return (
									<div key={index + 10} className="content-card">
										<h2>{elem.label}</h2>
										{
											elem.info.map((e, i) => {
												return (
													<div key={i + 100} className="content-body">
														<div className="description">
															<h3>{e.name}</h3>
															<p>{e.description}</p>
														</div>
													</div>
												)
											})
										}
									</div>
								)
							})
						}

						<h2>{owner.someInfo.label}</h2>
						<p>{owner.someInfo.text}</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About;