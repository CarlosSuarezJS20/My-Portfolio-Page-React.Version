import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
	return (
		<header className="header">
			<h1 className="header-title">
				carlos suarez' <span className="portfolio">{'< portfolio />'}</span>
			</h1>
			<FontAwesomeIcon
				icon={faBars}
				className="burger-menu-icon"
				onClick={
					props.display
						? () => {
								props.clickedClose();
								props.hideBackDrop();
						  }
						: () => {
								props.clickedOpen();
								props.showBackDrop();
						  }
				}
			/>
		</header>
	);
};

export default Header;
