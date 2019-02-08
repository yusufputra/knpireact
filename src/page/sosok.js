import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Sidebar from '../component/sidebar'

export class Sosok extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <link rel="stylesheet" href="/css/Sosok.css"/>
        <section className="main-content">
            <div className="container" id="content">
                <div className="row">
                    <div className="col-sm-8">
                        <h4 id="berita">SOSOK</h4>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="news-box">
                                    <a href="404.html">
                                        <img src="image/barack-obama-1174489_960_720.jpg" alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="news-text">
                                    <h5>Some Title Here</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum, ex in euismod bibendum, velit massa vulputate ligula, vitae facilisis massa sem a justo.</p>
                                    <a href="404.html">Read More &#8811;</a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="news-box">
                                    <a href="404.html">
                                        <img src="image/woman-190897_960_720.jpg" alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="news-text">
                                    <h5>Some Title Here</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum, ex in euismod bibendum, velit massa vulputate ligula, vitae facilisis massa sem a justo.</p>
                                    <a href="404.html">Read More &#8811;</a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="news-box">
                                    <a href="404.html">
                                        <img src="image/yaoming.jpg" alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="news-text">
                                    <h5>Some Title Here</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum, ex in euismod bibendum, velit massa vulputate ligula, vitae facilisis massa sem a justo.</p>
                                    <a href="404.html">Read More &#8811;</a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="news-box">
                                    <a href="404.html">
                                        <img src="image/hqdefault.jpg" alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="news-text">
                                    <h5>Some Title Here</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum, ex in euismod bibendum, velit massa vulputate ligula, vitae facilisis massa sem a justo.</p>
                                    <a href="404.html">Read More &#8811;</a>
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

export default Sosok
