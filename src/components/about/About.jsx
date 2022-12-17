import SocialIcons from '../services/SocialIcons';
import Spinner from '../spinner/Spinner';

import './about.scss';

const About = () => {
	const { facebook, telegram, instagram, github, linkedin, viber } = SocialIcons;

	return (
		<section className='about'>
			<div className="about__row">
				<div className="about__main">
					<div className="about__main-info">
						<p> <span>Name:</span> Roman Popovych</p>
						<p> <span>Age:</span> 23 years</p>
						<p> <span>Address:</span> Kyiv, Fedory Pushynoi 8</p>
						<p> <span>Phone:</span> +38 093 4638 024</p>
						<p> <span>Email:</span> popovychjob@gmail.com</p>
						<figure className='social-media'>
							<a target="_blank" href=""><img src={facebook} alt="" /></a>
							<a target="_blank" href=""><img src={telegram} alt="" /></a>
							<a target="_blank" href=""><img src={instagram} alt="" /></a>
							<a target="_blank" href=""><img src={github} alt="" /></a>
							<a target="_blank" href=""><img src={linkedin} alt="" /></a>
							<a target="_blank" href=""><img src={viber} alt="" /></a>
						</figure>
					</div>
					<div className="about__steck">
						<div className="d-flex">
							<div className="steck-label">
								<h5>HTML</h5>
								<h5>CSS</h5>
								<h5>JS</h5>
								<h5>REACT</h5>
								<h5>REDUX</h5>
								<h5>GIT</h5>
							</div>
							<div className="steck-progress">
								<div className="progress" style={{ "height": "20px", "width": "100%", "margin": "3px 0 12px 0" }}>
									<div className="progress-bar" role="progressbar" aria-label="Example 20px high" style={{ "width": "95%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
								<div className="progress" style={{ "height": "20px", "width": "100%", "margin": "3px 0 12px 0" }}>
									<div className="progress-bar" role="progressbar" aria-label="Example 20px high" style={{ "width": "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
								<div className="progress" style={{ "height": "20px", "width": "100%", "margin": "3px 0 12px 0" }}>
									<div className="progress-bar" role="progressbar" aria-label="Example 20px high" style={{ "width": "75%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
								<div className="progress" style={{ "height": "20px", "width": "100%", "margin": "3px 0 12px 0" }}>
									<div className="progress-bar" role="progressbar" aria-label="Example 20px high" style={{ "width": "70%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
								<div className="progress" style={{ "height": "20px", "width": "100%", "margin": "3px 0 12px 0" }}>
									<div className="progress-bar" role="progressbar" aria-label="Example 20px high" style={{ "width": "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
								<div className="progress" style={{ "height": "20px", "width": "100%", "margin": "3px 0 12px 0" }}>
									<div className="progress-bar" role="progressbar" aria-label="Example 20px high" style={{ "width": "75%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>
						</div>
						<a target="_blank" href="https://drive.google.com/file/d/1lAZp_31wI06E3K5WG1779oXDQKIgbRk_/view?usp=sharing" className="btn-form btn btn-outline-primary">Download CV</a>
					</div>
				</div>
				<div className="about__cv">
					<iframe src="https://drive.google.com/file/d/1lAZp_31wI06E3K5WG1779oXDQKIgbRk_/preview" allow="autoplay"></iframe>
				</div>
			</div>
		</section>
	)

}

export default About;