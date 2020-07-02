import React ,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import  { encrypt , decrypt } from 'react-crypt-gsm';
import {render} from 'react-dom'

import PropTypes from 'prop-types';
import randomstring from 'randomstring';
import ReactEncrypt from 'react-encrypt'


class Renderer extends Component {
  static contextTypes = {
    encrypt: PropTypes.func.isRequired,
    decrypt: PropTypes.func.isRequired,
  }


  state = {
    pureText: "",
  };


  onChange = event => {

    const {
      name,
      value,
    } = event.target;

    this.setState({
      [name]: value,
    });

  }

  render(){


    const {
      pureText,
    } = this.state;


    const {
      encrypt,
      decrypt,
    } = this.context;

    console.log(decrypt);


    let encryptedText
    let decryptedText


    encryptedText = encrypt(pureText);
    decryptedText = decrypt(encryptedText);


    return <div>

      <div>

        <h3>
          Pure text
        </h3>

        <textarea
          style={{
            width: "100%",
            height: 100,
          }}
          name="pureText"
          value={pureText}
          onChange={this.onChange}
        />

      </div>

      <div>

        <h3>
          Encrypted text
        </h3>

        <textarea
          style={{
            width: "100%",
            height: 100,
          }}
          value={encryptedText || ""}
          disabled
        />

      </div>

     
 

    </div>

  }
}

class Demo extends Component {

  constructor(props){
    super(props)

    this.state = {
      encryptKey:""
    }
  }



  handleChange=(e)=>{
    this.setState({encryptKey:e.target.value})
  }


  render() {
    
    return <div>
     
     <h3>Encrypt key:</h3> <textarea type='text' onChange={this.handleChange}/>

      <ReactEncrypt
        encryptKey={this.state.encryptKey}
      >
        <Renderer />
      </ReactEncrypt>

    </div>
  }
}

export default Demo;
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
