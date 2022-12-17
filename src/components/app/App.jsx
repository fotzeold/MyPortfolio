import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../header/Header";
import MainPage from "../main/MainPage";
import About from "../about/About";
import MyProjects from "../myProjects/MyProjects";
import Contact from "../contact/Contact";

import './app.scss';

function App() {

	return (
		<div className="container">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Header />}>
						<Route index element={<MainPage />} />
						<Route path="about" element={<About />} />
						<Route path="my-projects" element={<MyProjects />} />
						<Route path="contact" element={<Contact />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App;