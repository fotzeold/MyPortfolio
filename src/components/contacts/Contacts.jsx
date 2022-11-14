import './contacts.scss';
import phone from '../../img/icon/phone-call-svgrepo-com.svg';
import telegram from '../../img/icon/telegram-svgrepo-com.svg';
import facebook from '../../img/icon/facebook-svgrepo-com.svg';
import instagram from '../../img/icon/instagram-svgrepo-com.svg';
import github from '../../img/icon/github-svgrepo-com.svg';
import linkedin from '../../img/icon/linkedin-svgrepo-com.svg';

const Contacts = () => {
	return (
		<address>
			<div className="wrapper">
				<h2>
					Звяжись зі мною як тобі зручно
				</h2>
				<div className="contacts">
					<div className="contacts__social phone">
						<a href="tel:+380934638024">
							<img src={phone} alt="" />
							<span>093 4638 024</span>
						</a>
					</div>
					<div className="contacts__social telegram">
						<a href="">
							<img src={telegram} alt="" />
							<span>Telegram</span>
						</a>
					</div>
					<div className="contacts__social facebook">
						<a href="">
							<img src={facebook} alt="" />
							<span>Facebook</span>
						</a>
					</div>
					<div className="contacts__social instagram">
						<a href="">
							<img src={instagram} alt="" />
							<span>Instagram</span>
						</a>
					</div>
					<div className="contacts__social github">
						<a href="">
							<img src={github} alt="" />
							<span>GitHub</span>
						</a>
					</div>
					<div className="contacts__social linkedin">
						<a href="">
							<img src={linkedin} alt="" />
							<span>Linkedin</span>
						</a>
					</div>
				</div>
			</div>
		</address>
	)
}

export default Contacts;
