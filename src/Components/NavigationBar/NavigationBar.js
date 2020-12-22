import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

const NavigationBar = (props) => {
	let classesName = ['navbar'];

	if (props.display) {
		classesName = ['navbar', 'show'];
	}

	return (
		<nav className={classesName.join(' ')}>
			<ul className="nav-list">
				<li>
					<a href={'#h'} className="nav-link" onClick={props.clicked}>
						<FontAwesomeIcon
							icon={faFolderOpen}
							className="faFolderOpen-home"
						/>
						home
					</a>
				</li>
				<li>
					<a href={'#h'} className="nav-link" onClick={props.clicked}>
						<FontAwesomeIcon icon={faFileCode} className="faFileCode-about" />
						About
					</a>
				</li>
				<li>
					<a href={'#h'} className="nav-link" onClick={props.clicked}>
						<FontAwesomeIcon
							icon={faFileCode}
							className="faFileCode-projects"
						/>
						projects
					</a>
				</li>
				<li>
					<a href={'#h'} className="nav-link" onClick={props.clicked}>
						<FontAwesomeIcon icon={faFileCode} className="faFileCode-contact" />
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default NavigationBar;
