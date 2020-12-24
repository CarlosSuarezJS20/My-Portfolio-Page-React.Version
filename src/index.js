import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Routing
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<BrowserRouter basename="/Carlos-Suarez-portfolio">
		<App />
	</BrowserRouter>,
	document.getElementById('root')
);

reportWebVitals();
