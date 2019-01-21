import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class FeatImg extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
        <div className="col-sm-4">
            <div className="featured-news">
                <a href=""><img src="/img/pagatan_beach-wallpaper-2560x2048.jpg" alt="" id="fn-1"/></a>
                <div className="carousel-caption" id="capt1">
            Some Caption Here
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

export default FeatImg
