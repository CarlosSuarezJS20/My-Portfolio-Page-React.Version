import React, { useState } from 'react';
import Header from './Components/Header/Header';
import MainSection from './Components/MainSection/MainSection';
import Backdrop from './Components/NavigationBar/Backdrop/Backdrop';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import SocialMediaSideBar from './Components/SocialMediaSideBar/SocialMediaSideBar';

// Routing

const App = () => {
	const [showDropNavBar, setShowDropNavBar] = useState(false);
	const [showBackDrop, setShowBackDrop] = useState(false);

	const showBackDropHandler = () => {
		setShowBackDrop(true);
	};

	const hideBackDropHandler = () => {
		setShowBackDrop(false);
	};

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
				showBackDrop={showBackDropHandler}
				hideBackDrop={hideBackDropHandler}
			/>
			<Backdrop
				display={showBackDrop}
				clickedHide={hideBackDropHandler}
				hideMenu={hideDropNavBarHandler}
			/>
			<NavigationBar
				display={showDropNavBar}
				clicked={hideDropNavBarHandler}
				hideBackDrop={hideBackDropHandler}
			/>
			<MainSection />
			<SocialMediaSideBar />
		</main>
	);
};

export default App;
