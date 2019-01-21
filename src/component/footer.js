import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import GaleriFoot from './galeriFoot'

export class Footer extends Component {
  static propTypes = {
    prop: PropTypes
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
                        <form action="">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Nama Lengkap" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <textarea name="" className="form-control" id="" rows="2" placeholder="Pesan"></textarea>
                            </div>
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
