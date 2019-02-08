import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class HotTopics extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
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
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default HotTopics
