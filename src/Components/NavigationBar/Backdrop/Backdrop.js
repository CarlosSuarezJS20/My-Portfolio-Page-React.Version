import React from 'react';

const Backdrop = (props) => {
	let backDropClasses = ['backdrop'];

	if (props.display) {
		backDropClasses = ['backdrop', 'show-backdrop'];
	}

	return (
		<div
			className={backDropClasses.join(' ')}
			onClick={() => {
				props.clickedHide();
				props.hideMenu();
			}}
		>
			{props.children}
		</div>
	);
};

export default Backdrop;
