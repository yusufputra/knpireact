import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Sidebar from '../component/sidebar'

export class Unduh extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <link rel="stylesheet" href="/css/Unduh.css"/>
        <section class="main-content">
            <div class="container" id="content">
                <div class="row">
                    <div class="col-sm-8">
                        <h4 id="berita">UNDUH</h4>
                        <p>Berikut adalah dokumen resmi dari KNPI yang dapat di Unduh :</p>
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="unduhan">
                                    <img src="image/Pdf.png" alt="" class="thumb"/>
                                    <a href="">
                                        <p>Some File Can Be Downloaded</p>
                                    </a>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="unduhan">
                                    <img src="image/Pdf.png" alt="" class="thumb"/>
                                    <a href="">
                                        <p>Some File Can Be Downloaded</p>
                                    </a>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="unduhan">
                                    <img src="image/Pdf.png" alt="" class="thumb"/>
                                    <a href="">
                                        <p>Some File Can Be Downloaded</p>
                                    </a>
                                </div>
                            </div>
                        </div>
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

export default Unduh
