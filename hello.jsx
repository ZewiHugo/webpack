import React from 'react';
import ReactDOM from 'react-dom';
import { getAFromFunctions } from './utils.jsx';
import { getBFromUtils } from './functions.jsx';
 
class Hello extends React.Component {
  render() {
    return <h1>Hello {getBFromUtils()} {getAFromFunctions()}</h1>
  }
}
 
ReactDOM.render(<Hello/>, document.getElementById('hello'));