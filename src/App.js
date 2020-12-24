import React, { useState } from 'react';
import Header from './Components/Header/Header';
import MainSection from './Components/MainSection/MainSection';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import SocialMediaSideBar from './Components/SocialMediaSideBar/SocialMediaSideBar';

// Routing

const App = () => {
	const [showDropNavBar, setShowDropNavBar] = useState(false);

	const showDropNavBarHandler = () => {
		setShowDropNavBar(true);
	};

	const hideDropNavBarHandler = () => {
		setShowDropNavBar(false);
	};

	return (
		<main className="main">
			<Header
				display={showDropNavBar}
				clickedOpen={showDropNavBarHandler}
				clickedClose={hideDropNavBarHandler}
			/>
			<NavigationBar display={showDropNavBar} clicked={hideDropNavBarHandler} />
			<MainSection />
			<SocialMediaSideBar />
		</main>
	);
};

export default App;
