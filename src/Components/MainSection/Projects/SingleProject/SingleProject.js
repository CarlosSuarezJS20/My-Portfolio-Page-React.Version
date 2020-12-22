import React from 'react';
import image from '../../../../images/login-bw-app.png';
// import {
// 	faCss3Alt,
// 	faReact,
// 	faHtml5,
// 	faJsSquare,
// 	faNodeJs,
// } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SingleProject = (props) => {
	return (
		<div className="card">
			{/* front of card */}
			<div className="card-side card-front">
				<img src={image} alt="budge-app" />
				<div className="card-info">
					<h3>{props.projectTitle}</h3>
					<p>{props.projectDescription}</p>
					<span>more info? just flip!</span>
					<div className="footer-languages">
						<h4>Language</h4>
						{props.projectLanguages.map((l) => (
							<FontAwesomeIcon
								key={l.iconName}
								className="footer-lang"
								icon={l}
							/>
						))}
					</div>
				</div>
			</div>
			{/* back of card */}
			<div className="card-side card-back">
				<div className="card-links-container">
					<h4>Visit</h4>
					{props.projectLinks.map((l, index) => {
						return (
							<a key={index} href={l.link}>
								<FontAwesomeIcon
									key={index}
									className="back-card-link"
									icon={l.icon}
								/>
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default SingleProject;
