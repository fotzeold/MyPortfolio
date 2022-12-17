import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './contact.scss';

const Contact = () => {
	const [state, handleSubmit] = useForm("myyvropz");

	return (
		<section className="contact">
			<div className="contact-row">

				<div className="contact__form">
					<div className="form__row">
						<div className="contact__image">
						</div>
						<form onSubmit={handleSubmit}>
							<h3>Have a question? <br /> Contact me</h3>
							<input
								id="name"
								type="text"
								name="name"
								className="form-control"
								placeholder='Your name'
							/>
							<input
								id="email"
								type="email"
								name="email"
								className="form-control"
								placeholder='Your email'
							/>
							<input
								id="tel"
								type="tel"
								name="tel"
								className="form-control"
								placeholder='Phone number'
								minLength={10}
								maxLength={13}
							/>
							<textarea
								id="message"
								name="message"
								className="form-control"
								placeholder="Leave a comment here"
							/>
							<ValidationError
								prefix="Email"
								field="email"
								errors={state.errors}
							/>
							<ValidationError
								prefix="Message"
								field="message"
								errors={state.errors}
							/>
							{
								state.succeeded ?
									<button style={{ color: "black", border: "1px solid white" }} className="btn-form btn btn-outline-primary" disabled={true}>
										Form submitted
									</button>
									:
									<button
										type="submit"
										disabled={state.submitting}
										className="btn-form btn btn-outline-primary"
									>
										Submit form
									</button>
							}
						</form>
					</div>
				</div>

				<div className="contact__info">
					<h3>My social networks</h3>
					<div className="contact__link-wrapper">
						<a className='contact__link' target="_blank" href="">Facebook</a>
						<a className='contact__link' target="_blank" href="">Telegram</a>
						<a className='contact__link' target="_blank" href="">Instagram</a>
						<a className='contact__link' target="_blank" href="">GitHub</a>
						<a className='contact__link' target="_blank" href="">LinkedIn</a>
						<a className='contact__link' target="_blank" href="">Viber</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact;