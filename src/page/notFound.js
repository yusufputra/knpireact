import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class NotFound extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <link rel="stylesheet" href="/css/404.css"/>
        <div className="number">
          404
        </div>
        <div className="text">
          Oops... Sepertinya Halaman Yang Anda Minta Tidak Ada :(
        </div>
        <div className="beranda">
          <a href="/home"><button type="button" className="btn btn-primary" id="beranda">Beranda</button></a>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default NotFound
