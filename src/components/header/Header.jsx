import logo from '../../img/icon/logo.png'
import './header.scss'

const Header = (props) => {
	const keys = ['main', 'about', 'project', 'contacts'];
	const values = ['Головна', 'Про мене', 'Проекти', 'Контакти'];

	return (
		<header>
			<div className="row">
				<div className="logo">
					<a href="">
						<img src={logo} alt="" />
					</a>
				</div>
				<nav>
					<ul>
						{
							keys.map((elem, index) => {
								return (
									<li
										className={props.visibleComponent == elem ? 'active' : ''}
										onClick={(e) => props.onVisible(e.target.ariaValueText)}
										key={index}
										aria-valuetext={elem}
									>{values[index]}</li>
								)
							})
						}
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header;