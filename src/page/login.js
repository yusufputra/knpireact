import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Joi from 'joi'

const schema = Joi.object().keys({
    username: Joi.string()
      .alphanum()
      .email()
      .min(3)
      .max(30)
      .required(),
    password: Joi.string()
      .min(8)
      .required(),
  });

export class Login extends Component {
  static propTypes = {
    prop: PropTypes
  }
  constructor(props){
      super(props);
      this.state = {
          done: false,
          login: false,
          errorMessage: "",
          admin:{
              email: "",
              password: ""
          }
      }
  }
  validation = (event) => {
    const result = Joi.validate(this.state.user, schema);
    if (result.error === null) {
      return true;
    }
    console.log(result);
    if (result.error.message.includes('username')) {
      this.setState({ errorMessage: "Username invalid" });
    }
    else {
      this.setState({ errorMessage: "Password invalid" });
    }
    return false;
  }
  login = (event) =>{
      const URL_LOGIN ='http://localhost:5000/auth/login';
      this.setState({errorMessage: ""});
      this.setState({login:true});
      if(this.validation()){
          const body ={
              email: this.state.admin.email,
              password: this.state.admin.password
          }
          console.log(body);
          fetch (URL_LOGIN,{
            method: 'POST',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(body)
          }).then(response=>{
              console.log("here");
            if(response.ok){
                console.log("seukses");
              return response.json();
              
            }
            return response.json().then(error=>{
                console.log("error 1");
              throw new Error(error.message);
            });
          }).then(token=>{
            localStorage.token=token;
            console.log("local token : " + localStorage.token)
            this.setState({done:true});
            this.setState({login:false});
            window.location.reload();
          }).catch(error=>{
            console.log('fetch error'+error)
            this.setState({ errorMessage: error.message });
            this.setState({login:false});
            return alert(error);
          });
      }
      
      event.preventDefault();
  }
  handlerEvent = e => {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    let copyUser = Object.assign({}, this.state.admin);
    copyUser[inputName] = inputValue;

    this.setState({ admin: copyUser });
  }
  render() {
    return (
      <div>
      <div className="container" style={{marginTop:10+'%'}}>

        <h4 id="kontak">Login Admin</h4>
        <form onSubmit={this.login}>
            <div className="form-group">
                <input type="email" name="email" className="form-control" placeholder="Email" onChange={this.handlerEvent} required/>
            </div>
            <div className="form-group">
                <input type="password" name="password" className="form-control" placeholder="********" onChange={this.handlerEvent} required/>
            </div>
            <button type="submit" className="btn btn-primary" id="kirim">Kirim</button>
        </form>
    </div>

      </div>
    )
  }
}

export default Login
