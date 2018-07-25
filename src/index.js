import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {robots} from './robots'
import 'tachyons'
import App from './App'
import CardList from'./CardList'



import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>
    , document.getElementById('root'));
registerServiceWorker();

