import React from 'react';

import styles from './style.css';
import woffs from './woffs.jpg';

export default class App extends React.Component {
    render() {
	return (
	    <div className={ styles.title } style={{textAlign: 'center'}}>
              <h1>Hello Woffs!</h1>
	      <div>
		<img src={ woffs }/>
	      </div>
	    </div>);
    }
}
