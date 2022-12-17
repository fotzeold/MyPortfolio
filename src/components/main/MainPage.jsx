import './main-page.scss';
import main from '../../img/image/main/main.png'

const MainPage = () => {
	return (
		<main>
			<div className="main__row">
				<div className="main__avatar">
					<div className="main__avatar-bck">
						<img src={main} alt="" />
					</div>
				</div>
				<div className="main__info">
					<span className='modify'>{`<h1>`}</span>
					<h1 className='main__info-title'>
						Hi, <br />am Roman,<br />web developer
					</h1>
					<span className='modify'>{`</h1>`}</span><br />
				</div>
			</div >
		</main >
	)
}

export default MainPage;