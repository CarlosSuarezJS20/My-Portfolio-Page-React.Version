import React from 'react';
import About from './About/About';
import HeroWelcomeBanner from './HeroBanner/HeroWelcomeBanner';
import Projects from './Projects/Projects';

const MainSection = () => {
	return (
		<section className="content">
			{/* <HeroWelcomeBanner /> */}
			{/* <About /> */}
			<Projects />
		</section>
	);
};

export default MainSection;
