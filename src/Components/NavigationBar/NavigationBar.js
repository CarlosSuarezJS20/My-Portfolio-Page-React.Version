import React from 'react';

const NavigationBar = (props) => {
	console.log(props);
	let classesName = ['navbar'];

	if (props.display) {
		classesName = ['navbar', 'show'];
	}

	return (
		<nav className={classesName.join(' ')}>
			<ul className="nav-list">
				<li>
					<a href={'#h'} className="nav-link" onClick={props.clicked}>
						home
					</a>
				</li>
				<li>
					<a href={'#h'} className="nav-link" onClick={props.clicked}>
						About
					</a>
				</li>
				<li>
					<a href={'#h'} className="nav-link" onClick={props.clicked}>
						My projects
					</a>
				</li>
				<li>
					<a href={'#h'} className="nav-link" onClick={props.clicked}>
						Contact Me
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default NavigationBar;
