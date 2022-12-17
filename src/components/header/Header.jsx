import { Outlet, NavLink } from "react-router-dom";
import './header.scss';

const Header = () => {

	const togglerBurger = () => {
		document.querySelector(".menu").classList.toggle("change");
		document.querySelector(".menu-bar").classList.toggle("change-bar");
		document.body.classList.toggle("overflow-hidden");
	}

	const removeBurger = () => {
		document.querySelector(".menu").classList.remove("change");
		document.querySelector(".menu-bar").classList.remove("change-bar");
		document.body.classList.remove("overflow-hidden");
	}

	return (
		<header>
			<div className="d-flex justify-content-between">
				<div className="menu">
					<nav className="nav" id="nav">
						<ul>
							<li className="p-2">
								<NavLink
									onClick={removeBurger}
									to="/"
									style={({ isActive }) =>
										isActive ? { color: "#000" } : { color: "rgb(96, 96, 96)" }
									}
								>Main
								</NavLink>
							</li>
							<li className="p-2">
								<NavLink
									onClick={removeBurger}
									to="about"
									style={({ isActive }) =>
										isActive ? { color: "#000" } : { color: "rgb(96, 96, 96)" }
									}
								>About me
								</NavLink>
							</li>
							<li className="p-2">
								<NavLink
									onClick={removeBurger}
									to="my-projects"
									style={({ isActive }) =>
										isActive ? { color: "#000" } : { color: "rgb(96, 96, 96)" }
									}
								>Projects
								</NavLink>
							</li>
							<li className="p-2">
								<NavLink
									onClick={removeBurger}
									to="contact"
									style={({ isActive }) =>
										isActive ? { color: "#000" } : { color: "rgb(96, 96, 96)" }
									}
								>Contacts
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
				<div className="p-2">
					<div className="menu-bar" onClick={togglerBurger}>
						<div id="bar1" className="bar"></div>
						<div id="bar2" className="bar"></div>
						<div id="bar3" className="bar"></div>
					</div>
				</div>
				<div className="p-2">
					<div className="logotype">
						<span>Roman Popovych</span>
					</div>
				</div>
			</div>
			<Outlet />
		</header >
	)
}

export default Header;