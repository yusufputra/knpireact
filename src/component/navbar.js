import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Navbar extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <div className="navbar navbar-expand-lg fixed-top">
            <a className="navbar-brand" href="/home">
                    <img src="/img/knpi-logo-ok.png" alt="" />
                    </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <div className="bar1"></div>
				<div className="bar2"></div>
				<div className="bar3"></div>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
			<ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/home">Beranda <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Profil KNPI </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      	<a className="dropdown-item" href="/sejarah">Sejarah KNPI</a>
                      	<a className="dropdown-item" href="/visimisi">Visi-Misi dan Program Strategis KNPI Kota Malang</a>
                        <a className="dropdown-item" href="/struktur">Struktur Organisasi KNPI Kota Malang</a>
                        <a className="dropdown-item" href="/adart">AD-ART</a>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> KNPI News </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="/news/daerah">Daerah</a>
                        <a className="dropdown-item" href="/news/nusantara">Nusantara</a>
                        <a className="dropdown-item" href="/news/muda">Suara Muda</a>
                        <a className="dropdown-item" href="/news/pemerintahan">Suara Pemerintah</a>
                    </div>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="/notfound">Pelatihan <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="/notfound">Sosok <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="/notfound">Unduh <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="/notfound">Pengaduan <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="/notfound">Kontak <span className="sr-only">(current)</span></a>
                </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn fa my-2 my-sm-0" type="submit">&#xf002;</button>
            </form>
        </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default Navbar
