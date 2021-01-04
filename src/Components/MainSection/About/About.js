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
							Hi, my name is Carlos. I’m a front-end developer passionate about
							web development and all the useful things we can build with it.
						</p>
						<br />
						<p>
							During my time working in digital advertising, I developed a
							strong interest in programming. I decided to put thoughts into
							action and immersed myself into the fascinating world of coding. I
							have undertaken many courses on JavaScript, HTML and CSS, however,
							to improve my projects, I decided to go one step further and
							included React.js to my skill set.
						</p>
						<br />
						<p>
							I’m currently looking for opportunities where I can expand my
							skills and explore my creativity. My main professional goal is to
							help companies building interactive web pages that make them stand
							from the rest. Ultimately, I want to work in advance and exciting
							projects that will allow me to keep expanding my knowledge and
							utilize the full power of the different javaScript frameworks.
						</p>
					</div>
					<br />
				</article>
			</div>
		</section>
	);
};

export default About;
