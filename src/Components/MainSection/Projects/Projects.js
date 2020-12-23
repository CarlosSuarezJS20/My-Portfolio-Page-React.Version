import React, { useState } from 'react';
import SingleProject from './SingleProject/SingleProject';
import imageBwV1 from '../../../images/bwV1.png';
import imageBwV2 from '../../../images/bwV2.png';
import toDoList from '../../../images/TodoList.png';
import sodasProject from '../../../images/sodasV1.png';
import sodasProjectReact from '../../../images/sodasV2.png';
import myPortfolio from '../../../images/myPortfolio-react.png';

import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
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
			image: imageBwV1,
			description1: `The idea behind this project was to create a very fast way so travellers could find how much things cost in their holidays destination. Users can add, delete, edit existing items and filter as they wish.`,
			description2: `This is a single page app, powered by javaScript. I have added Node.js and use PASSPORT, BCRYPT, EFLASH libraries to make authentication more realistic. As the app uses NODE.JS, I have hosted this website in HEROKU and use EJS to interact with the element tree. Local storage as this was a prototype for testing purposes.`,
			languages: [faJsSquare, faHtml5, faCss3Alt, faNodeJs],
			links: [
				{
					link: 'https://github.com/CarlosSuarezJS20/World-budget-node.js',
					icon: faGithub,
				},
				{
					link: 'https://fierce-basin-44657.herokuapp.com/login',
					icon: faWindowMaximize,
				},
			],
		},
		{
			id: 2,
			projectTitle: 'World Budget App v2.0 - React',
			image: imageBwV2,
			description1: `Budget World 2.0 is a fully functional application built using React.js classes. To have more flexibility when manipulating data, I have included REDUX for state management. Furthermore, I’m using FIREBASE to store data and manage the API operations. `,
			description2: `Authentication is fully functional and routing helps for limiting page accessibility.`,
			languages: [faReact],
			links: [
				{
					link:
						'https://github.com/CarlosSuarezJS20/Budget-World-react.js-v2.0',
					icon: faGithub,
				},
				{
					link: 'https://budget-world-reactjs.web.app/budget-world/login',
					icon: faWindowMaximize,
				},
			],
		},
		{
			id: 3,
			projectTitle: 'Drag and Drop To Do List',
			image: toDoList,
			description1: `Simple but powerful. This app allows users to add their daily tasks, but also segment them into different priorities. They can DRAG and DROP between the different buckets and reactivate done tasks if required. `,
			description2: `I approached this project using OOB, JavaScript Modules, Webpack for code simplification in production. Local storage. `,
			languages: [faJsSquare, faHtml5, faCss3Alt],
			links: [
				{
					link: 'https://github.com/CarlosSuarezJS20/ToDoList-Project-',
					icon: faGithub,
				},
				{
					link: 'https://interactive-to-do-list.netlify.app/',
					icon: faWindowMaximize,
				},
			],
		},
		{
			id: 4,
			projectTitle: 'Rainbow Sodas UK Ecommerce',
			image: sodasProject,
			description: 'To add... To add... To add...To add...To add...',
			languages: [faJsSquare, faHtml5, faCss3Alt],
			links: [
				{ link: '/#add', icon: faGithub },
				{ link: '/#add1', icon: faWindowMaximize },
			],
		},
		{
			id: 5,
			projectTitle: 'React - Rainbow Sodas UK',
			image: sodasProjectReact,
			description: 'To add... To add... To add...To add...To add...',
			languages: [faReact],
			links: [
				{ link: '/#add', icon: faGithub },
				{ link: '/#add1', icon: faWindowMaximize },
			],
		},
		{
			id: 6,
			projectTitle: 'Portfolio Page',
			image: myPortfolio,
			description: 'To add... To add... To add...To add...To add...',
			languages: [faReact],
			links: [
				{ link: '/#add', icon: faGithub },
				{ link: '/#add1', icon: faWindowMaximize },
			],
		},
	]);

	console.log(projects);

	return (
		<section className="section section-projects">
			<div className="section-title ">
				<h2 className="projects-title">{'< Projects />'}</h2>
				<div className="underline"></div>
			</div>
			<div className="section-center project-center">
				{projects.map((proj) => {
					console.log(proj);
					return (
						<SingleProject
							key={proj.id}
							projectId={proj.id}
							projectImg={proj.image}
							projectTitle={proj.projectTitle}
							projectDescription1={proj.description1}
							projectDescription2={proj.description2}
							projectLanguages={proj.languages}
							projectLinks={proj.links}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Projects;
