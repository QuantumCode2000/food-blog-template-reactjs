import React from 'react';
import ReactDOM from 'react-dom';
import Categories from './components/Categories'
import SubscribeFollow from './components/SubscribeFollow'

const conteiner = document.getElementById('root')
const conteiner2 = document.getElementById('op')
const element = <Categories/>;
const element2 = <SubscribeFollow/>;
ReactDOM.render(element, conteiner);
ReactDOM.render(element2, conteiner2);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

