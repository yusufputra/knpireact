import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Buffer } from 'buffer';

const URL_FILE ='http://localhost:5000/api/postFile';
export class Addfiles extends Component {
  static propTypes = {
    prop: PropTypes
  }
  constructor(props){
      super(props);
      this.state = {
          data : {
              judul : "",
              gambar : null
          }
      }
  }
  
  send = (event) => {
      const body = {
          Fname : this.state.data.judul,
          Flink : this.state.data.gambar
      }
      fetch(URL_FILE,{
          method: 'POST',
          headers : {
              'content-type': 'application/json',
              'authorization': localStorage.token 
          },
          body: JSON.stringify(body)
      }).then(res=>{
          return  alert('uploaded');
      }).catch(err=>{
        console.log('fetch error'+err)
      })
      event.preventDefault();
  }
  handlerEvent = e => {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    let copyUser = Object.assign({}, this.state.data);
    copyUser[inputName] = inputValue;
    
    this.setState({ data: copyUser });
    console.log(this.state.data);
  }
  handlerFile = f => {
      let name = f.target.name;
      let file = f.target.files[0];
      let copyUser = Object.assign({}, this.state.data);
      copyUser[name] = file;
      
      this.setState({ data: copyUser });
  }
  render() {
    return (
      <div>
        <h6 id="berita">Files</h6>
        <form onSubmit={this.send} ref='uploadForm' id='uploadForm' method="post" encType="multipart/form-data">
            <div className="form-group">
                <label for="judul">Judul</label>
                <input type="text" className="form-control" name="judul" id="judul" aria-describedby="emailHelp" placeholder="judul" onChange={this.handlerEvent} required/>
            </div>
            <div className="form-group">
                <label for="gambar">Nama Ormas*</label>
                <input type="file" className="form-control" name="gambar" id="gambar" placeholder="gambar" onChange={(event)=>{
                  event.preventDefault();
                  let ff = event.target.files[0];
                  let name = event.target.name;
                  let file = ff.name
                  let copyUser = Object.assign({}, this.state.data);
                  copyUser[name] = file;
                  let data = new FormData();
                  data.append('gambar', ff);
                  console.log(ff.name);
                  this.setState({data: copyUser});
                  fetch('http://localhost:5000/api/uploadFile',{
                    headers:{
                      authorization: localStorage.token
                    },
                    method: 'POST',
                    body : data
                  }).then(res=>{
                      console.log(res);
                  }).catch(err=>{
                      console.log(err);
                  })
                }} required/>
            </div>
            <button type="submit" className="btn btn-primary" id="kirim">Kirim</button>
        </form>
      </div>
    )
  }
}


export default Addfiles
