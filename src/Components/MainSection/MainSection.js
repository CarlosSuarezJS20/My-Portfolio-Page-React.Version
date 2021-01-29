import React from 'react';
import About from './About/About';
import Contact from './Contact/Contact';
import HeroWelcomeBanner from './HeroBanner/HeroWelcomeBanner';
import Projects from './Projects/Projects';

// Routing
import { Route } from 'react-router-dom';

const MainSection = () => {
	return (
		<section className="content">
			<Route path={'/projects'} component={Projects} />
			<Route path={'/contact'} component={Contact} />
			<Route path={'/about'} component={About} />
			<Route path={'/'} exact component={HeroWelcomeBanner} />
		</section>
	);
};

export default MainSection;
