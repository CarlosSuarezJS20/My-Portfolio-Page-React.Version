import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	faCss3Alt,
	faReact,
	faHtml5,
	faJsSquare,
} from '@fortawesome/free-brands-svg-icons';

const About = () => {
	return (
		<section className="section about">
			<div className="section-center about-center">
				<article className="title">
					<h2>About Me</h2>
					<div className="underline"></div>
					<div className="social-icons-holder">
						<h3>{'<Skills/>'}</h3>
						<FontAwesomeIcon icon={faReact} className="react-about" />
						<FontAwesomeIcon icon={faJsSquare} className="javaScritps-about" />
						<FontAwesomeIcon icon={faCss3Alt} className="css-about" />
						<FontAwesomeIcon icon={faHtml5} className="html-about" />
					</div>
				</article>
				<article className="about-info">
					<div className="about-title">
						<h2>
							Let's <span className="connect">{'<Connect/>'}!</span>
						</h2>
						<p>
							Need to add..Need to add..Need to add..Need to add..Need to add..
							Need to add.. Need to add.. Need to add.. Need to add.. Need to
							add.. Need to add.. Need to add.. Need to add.. Need to add.. Need
							to add..
						</p>
						<br />
						<p>
							Need to add..Need to add..Need to add..Need to add..Need to add..
							Need to add.. Need to add.. Need to add.. Need to add.. Need to
							add.. Need to add.. add.. Need to add.. add.. Need to add.. add..
							add.. Need to add.. add.. Need to add.. add.. Need to add.. Need
							add.. Need to add.. add.. Need to add.. add.. Need to add.. to
							add.. Need to add.. add.. Need to add.. add.. Need to add.. add..
							add.. Need to add.. add.. Need to add.. add.. Need to add.. Need
							add.. Need to add.. to add.. add..
						</p>
					</div>
					<br />
					<a href="#/" className="btn-back-home btn-about">
						home
					</a>
				</article>
			</div>
		</section>
	);
};

export default About;
