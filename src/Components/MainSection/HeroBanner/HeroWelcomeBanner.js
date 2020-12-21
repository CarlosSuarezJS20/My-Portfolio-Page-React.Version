import React from 'react';
import video from '../../../videos/video.mp4';

const HeroWelcomeBanner = () => {
	return (
		<div className="welcome-section">
			<video autoPlay muted loop className="video-container" type="video/mp4">
				<source src={video} />
			</video>
			<div className="hero-banner">
				<h2>
					Hi, I'm <strong className="name">{'< Carlos />'}</strong>
				</h2>
				<p className="description">
					<span className="job-title">Front End Developer</span> ready to build
					awesome, fast and interactive websites.
				</p>
				<a href="#c" className="banner-btn">
					My Projects
				</a>
			</div>
		</div>
	);
};

export default HeroWelcomeBanner;
