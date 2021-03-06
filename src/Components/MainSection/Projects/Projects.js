import React, { useState } from 'react';
import SingleProject from './SingleProject/SingleProject';
import imageBwV1 from '../../../images/bwV1.png';
import imageBwV2 from '../../../images/newBudgetW.png';
import toDoList from '../../../images/TodoList.png';
import sodasProject from '../../../images/sodasV1.png';
import sodasProjectReact from '../../../images/sodasV2.png';
import myPortfolio from '../../../images/myPortfolio-react.png';
import codeWarsImg from '../../../images/kata.png';
import dogImg from '../../../images/dogs.png';

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
			id: 2,
			projectTitle: 'World Budget App v2.0',
			image: imageBwV2,
			description1: `Budget World 2.0 is a fully functional application built using React.js classes. To have more flexibility when manipulating data, I have included REDUX for state management. Furthermore, I’m using FIREBASE to store data and manage the API operations. I'm using AXIOS library throughout the project.`,
			description2: `Authentication is fully functional and routing helps for limiting page accessibility. Fully RESPONSIVE`,
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
			id: 1,
			projectTitle: 'Puppy Finder React',
			image: dogImg,
			description1: `This web-app helps users find their ideal puppy dog. they can find dogs depending on breed, temperaments and sizes. Try it out!`,
			description2: `This is a single page app, powered by React.js. I have used React-Routing and Redux for state management. I have included additional libraries such as AXIOS, React-Slick Page is fully RESPONSIVE`,
			languages: [faReact],
			links: [
				{
					link: 'https://github.com/CarlosSuarezJS20/puppyLand',
					icon: faGithub,
				},
				{
					link: 'https://puppyfinder-378cf.web.app/',
					icon: faWindowMaximize,
				},
			],
		},
		{
			id: 3,
			projectTitle: 'World Budget App v1.0',
			image: imageBwV1,
			description1: `The idea behind this project was to create a very fast way for travellers to find how much things cost in their holidays destination. Users can add, delete, edit existing items and filter as they wish.`,
			description2: `This is a single page app, powered by javaScript. I have added Node.js and use PASSPORT, BCRYPT, EFLASH libraries to make authentication more realistic. As the app uses NODE.JS, I have hosted this website in HEROKU and use EJS to interact with the elements tree. Local storage was used as this was a prototype for testing purposes. Fully RESPONSIVE`,
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
			id: 4,
			projectTitle: 'Drag and Drop To Do List',
			image: toDoList,
			description1: `Simple but powerful. This app allows users to add their daily tasks, but also segment them into different priorities. They can DRAG and DROP between the different buckets and reactivate done tasks if required.`,
			description2: `I approached this project using OOB, JavaScript Modules, Webpack for code simplification in production. Local storage. Fully RESPONSIVE`,
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
			id: 5,
			projectTitle: 'Rainbow Sodas UK Ecommerce',
			image: sodasProject,
			description1: `This project allows me to see how different parts of an ecommerce work together and share information to render information and the appropriate elements. Features include: filtering, quantity adjustments, cart display.  `,
			description2: `I approached this project using OOB javaScript architecture. I used this approach to understand the structure and prepare me to emigrate the page to react.js. Fully RESPONSIVE`,
			languages: [faJsSquare, faHtml5, faCss3Alt],
			links: [
				{
					link: 'https://github.com/CarlosSuarezJS20/Rainbow-soda-company',
					icon: faGithub,
				},
				{
					link: 'https://amazing-davinci-6168cb.netlify.app/',
					icon: faWindowMaximize,
				},
			],
		},
		{
			id: 6,
			projectTitle: 'React - Rainbow Sodas UK',
			image: sodasProjectReact,
			description1: `This project is built on React.js using REACT HOOKS. For this version, I use Context, useState() and useEffect() to manage the state elements and facilitate the flow of data through different components. Furthermore, I’m hosting this project database in FireBase and fetching the products list from the same server. I’m in the process of adding a reducer to simplify the code and specify the different state actions this requires.  `,
			description2: `For fetching the information from the server,  I’m using the FETCH() method available through javaScript. Fully RESPONSIVE`,
			languages: [faReact],
			links: [
				{
					link:
						'https://github.com/CarlosSuarezJS20/Rainbow-Sodas-uk-React.V2.0',
					icon: faGithub,
				},
				{ link: 'https://rainbow-soda-uk.web.app/', icon: faWindowMaximize },
			],
		},
		{
			id: 7,
			projectTitle: 'My Portfolio Page',
			image: myPortfolio,
			description1: `The idea behind this project was to create a showcase of all my coding projects for the past year. I tried to keep the UI as simple as possible without any fluff. `,
			description2: `This is a Single Page Application, powered by ROUTING-REACT library and is build with REACT HOOKS. Fully RESPONSIVE`,
			languages: [faReact],
			links: [
				{
					link:
						'https://github.com/CarlosSuarezJS20/My-Portfolio-Page-React.Version',
					icon: faGithub,
				},
			],
		},
		{
			id: 8,
			projectTitle: 'Code Wars - Ongoing',
			image: codeWarsImg,
			description1: `Helps me build my problem solving skills and allow me to practice different concepts learned in JavaScript`,
			description2: `We are what we repeatedly do. Excellence then, is not an act, but a habit - Aristotle`,
			languages: [faJsSquare],
			links: [
				{
					link: 'https://github.com/CarlosSuarezJS20/CodeWar-Challenges',
					icon: faGithub,
				},
			],
		},
	]);

	return (
		<section className="section section-projects">
			<div className="section-title ">
				<h2 className="projects-title">{'< Projects />'}</h2>
				<div className="underline"></div>
			</div>
			<div className="section-center project-center">
				{projects.map((proj) => {
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
