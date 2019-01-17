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
            <a className="navbar-brand" href="#">
                    <img src="/img/knpi-logo-ok.png" alt="" />
                    </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Beranda <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Profil KNPI
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        </div>
                    </li>
                            <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        KNPI News
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        </div>
                    </li>
                            <li className="nav-item active">
                        <a className="nav-link" href="#">Pelatihan <span className="sr-only">(current)</span></a>
                    </li>
                            <li className="nav-item active">
                        <a className="nav-link" href="#">Sosok <span className="sr-only">(current)</span></a>
                    </li>
                            <li className="nav-item active">
                        <a className="nav-link" href="#">Unduh <span className="sr-only">(current)</span></a>
                    </li>
                            <li className="nav-item active">
                        <a className="nav-link" href="#">Pengaduan <span className="sr-only">(current)</span></a>
                    </li>
                            <li className="nav-item active">
                        <a className="nav-link" href="#">Kontak <span className="sr-only">(current)</span></a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
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
