import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
const URL_FILE ='http://localhost:5000/api/postContent';
const URL_OWN ='http://localhost:5000/api/getContent';
export class Addnews extends Component {
  static propTypes = {
    prop: PropTypes
  }
  
  constructor(props){
    super(props);
    this.state = {
        data : {
            judul : "",
            category : "",
            konten : "",
            gambar : null
        },
        content : null
    }
}

componentDidMount(){
  fetch(URL_OWN,{
    headers : {
      'content-type': 'application/json',
      'authorization': localStorage.token 
    }
  }).then(ress=>{
    return ress.json()
  }).then(dataa=>{
    console.log(dataa)
  })
}

send = (event) => {
    const body = {
        title : this.state.data.judul,
        category : this.state.data.category,
        isi : this.state.data.konten,
        image : this.state.data.gambar
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
        <h6 id="berita">News</h6>
        <form onSubmit={this.send} enctype="multipart/form-data">
            <div className="form-group">
                <label for="judul">Judul</label>
                <input type="text" className="form-control" name="judul" id="judul" aria-describedby="emailHelp" placeholder="judul" onChange={this.handlerEvent} required/>
            </div>
            <div className="form-group">
                <label for="category">Kategori</label>
                
                <select name="category" id="category" className="form-control" aria-describedby="emailHelp" onChange={this.handlerEvent} required>
                  <option value="daerah">Daerah</option>
                  <option value="nusantara">Nusantara</option>
                  <option value="muda">Suara Muda</option>
                  <option value="pemerintah">Suara Pemerintah</option>
                  <option value="sosok">Sosok</option>
                </select>
            </div>
            <div className="form-group">
                <label for="konten">Konten</label>
                <textarea className="form-control" name="konten" id="konten" aria-describedby="emailHelp" placeholder="konten" onChange={this.handlerEvent} required></textarea>
            </div>
            <div className="form-group">
                <label for="gambar">Gambar</label>
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
                      return  res.json();
                  }).then(dataaa=>{
                      let payload = {
                        judul : this.state.data.judul,
                        category: this.state.data.category,
                        konten : this.state.data.konten,
                        gambar : dataaa.filepath
                      };
                      this.setState({data: payload});
                      console.log(this.state.data);
                  })
                }} required/>
            </div>
            <button type="submit" className="btn btn-primary" id="kirim">Kirim</button>
        </form>
      </div>
    )
  }
}


export default Addnews
