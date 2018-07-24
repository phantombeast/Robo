import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {robots} from './robots'
import 'tachyons'
import CardList from'./CardList'



import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CardList robots={robots}/>
    , document.getElementById('root'));
registerServiceWorker();

