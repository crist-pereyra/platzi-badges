// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'

import App from './components/App';

//const jsx = <h1>Hello, Platzi Badges from React!</h1>;
// const element = React.createElement('a', { href: 'https://platzi.com' }, 'ir a Platzi');

// const element = React.createElement( //lo mismo a jsx
//     'div',
//     {},
//     React.createElement('h1', {}, 'Hola, soy Cristian'),
//     React.createElement('p', {}, 'Soy Ingeniero de la web')
// )
//const name = 'Cristian'
//const element = React.createElement('h1', {}, `Hola, soy ${name}`);
//const jsx = <h1>Hola, soy {name}</h1>
// const element = (<div>
//     <h1>Hola, soy Crisitan</h1>
//     <p>Soy Ingeniero Fronted</p>
// </div>
// );

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<App />, container);
//envio de props firstName="Lilly" lastName="Kaufman" jobTitle="Fronted Engineer" twitter="crist_pereyra" avatarUrl="https://es.gravatar.com/avatar?d=identicon"
