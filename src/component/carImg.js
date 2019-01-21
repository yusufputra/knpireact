import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class CarImg extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
        <div className="carousel-item active">
            <img src="/img/ace-1807511_1280.jpg" alt="" width="1100" height="500"/>
            <div className="carousel-caption" id="cc1">
                <h3>Categories</h3>
                <br/>
                <p>Some Caption Text</p>
            </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default CarImg
