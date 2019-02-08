import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import GaleriFoot from './galeriFoot'

export class Footer extends Component {
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
        <div className="page-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <h4 className="footer-knpi">KNPI KOTA MALANG</h4>
                        <p><strong>Sekretariat KNPI Malang</strong></p>
                        <br />
                        <p>Jl. panjaitan No. 7, Lowokwaru <br />
                        Kota Malang <br />
                        (0341) 88375124 <br />
                        kontak@knpikotamalang.com </p>
                    </div>
                    <div className="col-sm-3">
                        <h4>NAVIGASI</h4>
                        <ul>
                            <li>
                                <a href="#">Beranda</a>
                            </li>
                            <li>
                                <a href="#">Profil KNPI</a>
                            </li>
                            <li>
                                <a href="#">KNPI News</a>
                            </li>
                            <li>
                                <a href="#">Pelatihan</a>
                            </li>
                            <li>
                                <a href="#">Sosok</a>
                            </li>
                            <li>
                                <a href="#">Unduh</a>
                            </li>
                            <li>
                                <a href="#">Pengaduan</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <h4>GALERI</h4>
                        <div className="row">
                            <GaleriFoot></GaleriFoot>
                            <GaleriFoot></GaleriFoot>
                            <GaleriFoot></GaleriFoot>
                        </div>
                        <div className="row">
                            <GaleriFoot></GaleriFoot>
                            <GaleriFoot></GaleriFoot>
                            <GaleriFoot></GaleriFoot>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <h4 id="kontak">KONTAK KAMI</h4>
                        <form onSubmit={this.send}>
                            <div className="form-group">
                                <input type="text" name="nama" className="form-control" placeholder="Nama Lengkap" onChange={this.handlerEvent} required/>
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" className="form-control" placeholder="Email" onChange={this.handlerEvent} required/>
                            </div>
                            <div className="form-group">
                                <input type="text" name="subjek" className="form-control" placeholder="Subject" onChange={this.handlerEvent} required/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="pesan" id="pesan" placeholder="Pesan" onChange={this.handlerEvent} required/>
                            </div>
                            <button type="submit" className="btn btn-primary" id="kirim">Kirim</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="card-footer">
                <p>Copyright 2019 KNPI Kota Malang | Web by WEBDEV</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default Footer
