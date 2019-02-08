import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Addcar extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <h6 id="berita">Carousel</h6>
        <form onSubmit={this.send} enctype="multipart/form-data">
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


export default Addcar
