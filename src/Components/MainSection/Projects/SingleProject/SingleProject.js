import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SingleProject = (props) => {
	return (
		<div className="card">
			<div className="card-links-container">
				{props.projectLinks.map((l, index) => {
					return (
						<a key={index} href={l.link} rel="noreferrer" target="_blank">
							<FontAwesomeIcon
								key={index}
								className="back-card-link"
								icon={l.icon}
							/>
						</a>
					);
				})}
			</div>
			<div className="card-side card-front">
				<img src={props.projectImg} alt="budge-app" />
				<div className="card-info">
					<h3>{props.projectTitle}</h3>
					<div className="description-holder">
						<p>{props.projectDescription1}</p>
						<br />
						<p>{props.projectDescription2}</p>
					</div>
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
			<div className="card-side card-back"></div>
		</div>
	);
};

export default SingleProject;
