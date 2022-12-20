import React, { Component } from 'react';
import clear from './clear.svg'
class Cweather extends Component {
    state = {  } 
    render() { 
        return (
        <div className='CenterImg'>
            <img src={clear} alt="clear" />
            </div>
        );
    }
}
 
export default Cweather;