import { useState } from 'react'
import Header from "../header/Header";
import Main from '../main/Main';
import About from '../about/About';
import MyProject from '../myProject/MyProject';
import Contacts from '../contacts/Contacts';
import './app.scss';

function App() {
	const [visibleComponent, setVisible] = useState('main');

	const onVisible = (component) => {
		setVisible(component);
	}

	const onRender = (param) => {
		switch (param) {
			case 'main':
				return (<Main />)
				break;
			case 'about':
				return (<About />)
				break;
			case 'project':
				return (<MyProject />)
				break;
			case 'contacts':
				return (<Contacts />)
				break;
		}
	}

	return (
		<div className="container">
			<Header
				onVisible={onVisible}
				visibleComponent={visibleComponent}>
			</Header>
			{onRender(visibleComponent)}
		</div>
	)
}

export default App;