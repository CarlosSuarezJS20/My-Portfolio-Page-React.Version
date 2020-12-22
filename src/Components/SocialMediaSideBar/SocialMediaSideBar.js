import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SocialMediaSideBar = (props) => {
	return (
		<section className="sidebar">
			<FontAwesomeIcon icon={faGithub} className="gitHub-about" />
			<FontAwesomeIcon icon={faLinkedin} className="linkedIn-about" />
		</section>
	);
};

export default SocialMediaSideBar;
