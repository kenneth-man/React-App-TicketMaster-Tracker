import React from 'react';
import ReactDOM, { Root } from 'react-dom/client';
import App from './App';
import './index.css';

const root: Root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

// remove 'StrictMode' if don't want double render on component mount; new in React 18
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
