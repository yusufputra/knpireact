import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class NewsMuda extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <link rel="stylesheet" href="/css/News Suara Muda.css"/>
        <div className="container">
        <div className="row">
            <div className="col-sm-9">
                <h3>KNPI NEWS</h3>
                <h5>Kategori Suara Muda</h5>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="news-box">
                            <a href="">
                                <img src="/image/5bd47a5ea81bb7a8158b4567.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="news-text">
                            <h5>Some Title Here</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed elementum, ex in euismod bibendum, velit massa
                                vulputate ligula, vitae facilisis massa sem a justo.</p>
                            <br/>
                            <a href="#">Read More &#8811;</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="news-box">
                            <a href="">
                                <img src="/image/demo-sumpah-pemuda.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="news-text">
                            <h5>Some Title Here</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed elementum, ex in euismod bibendum, velit massa
                                vulputate ligula, vitae facilisis massa sem a justo.</p>
                            <br/>
                            <a href="">Read More &#8811;</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="news-box">
                            <a href="">
                                <img src="/image/ilustrasi-pemuda.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="news-text">
                            <h5>Some Title Here</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed elementum, ex in euismod bibendum, velit massa
                                vulputate ligula, vitae facilisis massa sem a justo.</p>
                            <br/>
                            <a href="">Read More &#8811;</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="news-box">
                            <a href="">
                                <img src="/image/pemuda.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="news-text">
                            <h5>Some Title Here</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed elementum, ex in euismod bibendum, velit massa
                                vulputate ligula, vitae facilisis massa sem a justo.</p>
                            <br/>
                            <a href="">Read More &#8811;</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-3" id="hot-topic">
                <h3>Hot Topics</h3>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="hot-news">
                            <a href="">
                                <img src="/image/barack-obama-1174489_960_720.jpg" alt=""/>
                            </a>
                            <div className="carousel-caption">Some Caption Here</div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="hot-news">
                            <a href="">
                                <img src="/image/football-461340_1280.jpg" alt=""/>
                            </a>
                            <div className="carousel-caption">Some Caption Here</div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="hot-news">
                            <a href="">
                                <img src="/image/bundestag-2463236_1280.jpg" alt=""/>
                            </a>
                            <div className="carousel-caption">Some Caption Here</div>
                        </div>
                    </div>
                </div>
            </div>
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

export default NewsMuda
