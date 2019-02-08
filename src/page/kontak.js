import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Sidebar from '../component/sidebar'
import { EventEmitter } from 'events';

export class Kontak extends Component {
  static propTypes = {
    prop: PropTypes
  }
  constructor(props){
      super(props);
      this.state = {
        errorMessage : "",
        contact : {
            nama : "",
            email : "",
            subjek : "",
            pesan : ""
        }
      }
  }
  send = (event) =>{
      const body ={
        name : this.state.contact.nama,
        email : this.state.contact.email,
        subject : this.state.contact.subjek,
        message : this.state.contact.pesan
      }
      console.log(body)
      fetch('http://localhost:5000/pubs/postContact',{
          method : 'POST',
          headers : {
              'content-type' : 'application/json'
          },
          body:JSON.stringify(body)
      }).then(res=>{
          if(res.ok){
              window.location.reload();
              return alert('sukses');
          }else{
              return alert('gagal');
          }
      }).catch(err=>{
          console.log(err)
      })
      event.preventDefault();
  }

  handlerEvent = e => {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    let content = Object.assign({}, this.state.contact);
    console.log(content);
    content[inputName] = inputValue;
    this.setState({contact : content});
    console.log(this.state.contact)
  }
  render() {
    return (
      <div>
        <link rel="stylesheet" href="/css/Kontak.css"/>
        <section className="main-content">
            <div className="container" id="content">
                <div className="row">
                    <div className="col-sm-8">
                        <h4 id="berita">KONTAK</h4>
                        <form onSubmit={this.send}>
                            <div className="form-group">
                                <label for="nama">Nama*</label>
                                <input type="text" className="form-control" name="nama" id="nama" aria-describedby="emailHelp" placeholder="Nama Lengkap" onChange={this.handlerEvent} required/>
                            </div>
                            <div className="form-group">
                                <label for="email">Alamat Email*</label>
                                <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="Email Anda" onChange={this.handlerEvent} required/>
                            </div>
                            <div className="form-group">
                                <label for="subjek">Subjek*</label>
                                <input type="text" className="form-control" name="subjek" id="subjek" placeholder="Subjek" onChange={this.handlerEvent} required/>
                            </div>
                            <div className="form-group">
                                <label for="pesan">Pesan*</label>
                                <input type="text" className="form-control" name="pesan" id="pesan" placeholder="Pesan" onChange={this.handlerEvent} required/>
                            </div>
                            <button type="submit" className="btn btn-primary" id="kirim">Kirim</button>
                        </form>
                    </div>
                    <Sidebar></Sidebar>
                </div>
            </div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default Kontak
