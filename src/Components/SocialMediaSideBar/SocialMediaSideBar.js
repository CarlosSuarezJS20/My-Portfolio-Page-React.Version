import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SocialMediaSideBar = (props) => {
	return (
		<section className="sidebar">
			<a
				href="https://github.com/CarlosSuarezJS20"
				rel="noreferrer"
				target="_blank"
			>
				<FontAwesomeIcon icon={faGithub} />
			</a>
			<a
				href="https://www.linkedin.com/in/carlos-suarez-msc-a3659141/"
				rel="noreferrer"
				target="_blank"
			>
				<FontAwesomeIcon icon={faLinkedin} />
			</a>
		</section>
	);
};

export default SocialMediaSideBar;
