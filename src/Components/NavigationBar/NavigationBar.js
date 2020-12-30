import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

import { NavLink } from 'react-router-dom';

const NavigationBar = (props) => {
	let classesName = ['navbar'];

	if (props.display) {
		classesName = ['navbar', 'show'];
	}

	return (
		<nav className={classesName.join(' ')}>
			<ul className="nav-list">
				<li>
					<NavLink
						to={'/'}
						exact
						active={'true'}
						className="nav-link"
						onClick={() => {
							props.clicked();
							props.hideBackDrop();
						}}
					>
						<FontAwesomeIcon
							icon={faFolderOpen}
							className="faFolderOpen-home"
						/>
						home
					</NavLink>
				</li>
				<li>
					<NavLink
						to={'/about'}
						className="nav-link"
						onClick={() => {
							props.clicked();
							props.hideBackDrop();
						}}
					>
						<FontAwesomeIcon icon={faFileCode} className="faFileCode-about" />
						About
					</NavLink>
				</li>
				<li>
					<NavLink
						to={'/projects'}
						href={'#h'}
						className="nav-link"
						onClick={() => {
							props.clicked();
							props.hideBackDrop();
						}}
					>
						<FontAwesomeIcon
							icon={faFileCode}
							className="faFileCode-projects"
						/>
						projects
					</NavLink>
				</li>
				<li>
					<NavLink
						to={'/contact'}
						className="nav-link"
						onClick={() => {
							props.clicked();
							props.hideBackDrop();
						}}
					>
						<FontAwesomeIcon icon={faFileCode} className="faFileCode-contact" />
						Contact
					</NavLink>
				</li>
			</ul>
			<button
				className="nav-button"
				onClick={() => {
					props.clicked();
					props.hideBackDrop();
				}}
			>
				x
			</button>
		</nav>
	);
};

export default NavigationBar;
