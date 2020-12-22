import React, { useState } from 'react';
import SingleProject from './SingleProject/SingleProject';
import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
import imageWBv1 from '../../../images/login-bw-app.png';
import {
	faCss3Alt,
	faReact,
	faHtml5,
	faJsSquare,
	faNodeJs,
	faGithub,
} from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
	const [projects] = useState([
		{
			id: 1,
			projectTitle: 'World Budget App v1.0',
			image: imageWBv1,
			description: 'To add... To add... To add...To add...To add...',
			languages: [faJsSquare, faHtml5, faCss3Alt, faNodeJs],
			links: [
				{ link: '/#add', icon: faGithub },
				{ link: '/#add1', icon: faWindowMaximize },
			],
		},
		{
			id: 2,
			projectTitle: 'World Budget App v1.0',
			image: imageWBv1,
			description: 'To add... To add... To add...To add...To add...',
			languages: [faJsSquare, faHtml5, faCss3Alt, faNodeJs],
			links: [
				{ link: '/#add', icon: faGithub },
				{ link: '/#add1', icon: faWindowMaximize },
			],
		},
	]);

	return (
		<section className="section section-projects">
			<div className="section-title ">
				<h2 className="projects-title">{'< Projects />'}</h2>
				<div className="underline"></div>
			</div>
			<div className="section-center blog-center">
				{projects.map((proj) => (
					<SingleProject
						key={proj.id}
						projectId={proj.id}
						projectImg={proj.image}
						projectTitle={proj.projectTitle}
						projectDescription={proj.description}
						projectLanguages={proj.languages}
						projectLinks={proj.links}
					/>
				))}
			</div>
		</section>
	);
};

export default Projects;
