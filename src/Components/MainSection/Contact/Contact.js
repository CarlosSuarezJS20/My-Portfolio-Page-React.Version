import React from 'react';

import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import {} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
	return (
		<section className="contact">
			<div className="section-center contact-container">
				<article className="contact-info">
					<div className="contact-item">
						<h4 className="contact-title">
							<span className="contact-icon">
								<FontAwesomeIcon icon={faEnvelope} className="form-icon" />
							</span>
							email
						</h4>
						<h4 className="contact-text">carlos.escobar_uk@live.com</h4>
					</div>
					<div className="contact-item">
						<h4 className="contact-title">
							<span className="contact-icon">
								<FontAwesomeIcon icon={faPhone} className="form-icon" />
							</span>
							telephone
						</h4>
						<h4 className="contact-text">+ 44 79 038 30 468</h4>
					</div>
				</article>
				<article className="contact-form">
					<h3>
						Get In <span>{`<Touch!/>`}</span>
					</h3>
					<form action="https://formspree.io/f/xeqpewvz" method="POST">
						<div className="form-group">
							<input
								type="text"
								placeholder="name"
								className="form-control"
								name="name"
							/>
							<input
								type="email"
								placeholder="email"
								className="form-control"
								name="email"
							/>
							<textarea
								name="message"
								placeholder="message"
								className="form-control"
								rows="5"
							></textarea>
						</div>
						<button type="submit" className="submit-btn btn">
							submit here
						</button>
					</form>
				</article>
			</div>
		</section>
	);
};

export default Contact;
