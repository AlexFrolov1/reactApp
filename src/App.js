import React, { Component } from 'react';
import Header from './components/header/Header';
import Form from './components/form/Form';
import Routers from './components/routers/Routers';





const mainmenu = [
{
	link: '/articles',
	label: 'Articles'
},
{
	link: '/contacts',
	label: 'Contacts'
},
{
	link: '/posts',
	label: 'Posts'
},
{
	link: '/about',
	label: 'About'
},
{
	link: '/contact',
	label: 'Contact'
},
{
	link: '/project',
	label: 'Project'
}
];

class App extends Component {
	render() {
		return (
			<div>
			<Header items={mainmenu} />
			<Form />
			<Routers />
			</div>
			)
		}
	}

	export default App;
