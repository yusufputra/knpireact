import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import GaleriComp from '../component/galeriComp'

export class Sidebar extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
        <div className="col-sm-4">
            <div className="widget-area">
                <aside className="kategori">
                    <h4>KATEGORI</h4>
                    <div className="kategori-text">
                        <a href="/news/daerah"><p>Daerah</p></a>
                        <a href="/news/nusantara"><p>Nusantara</p></a>
                        <a href="/news/muda"><p>Suara Muda</p></a>
                        <a href="/news/pemerintahan"><p>Suara Pemerintah</p></a>
                    </div>
                </aside>
                <aside className="side-gallery">
                    <h4>GALERI</h4>
                    <div className="row">
                        <GaleriComp></GaleriComp>
                        <GaleriComp></GaleriComp>
                        <GaleriComp></GaleriComp>
                    </div>
                    <div className="row">
                        <GaleriComp></GaleriComp>
                        <GaleriComp></GaleriComp>
                        <GaleriComp></GaleriComp>
                    </div>
                </aside>
            </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default Sidebar
