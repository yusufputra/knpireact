import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class CarImg extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
        <div className={"carousel-item "+this.props.className}>
            <img src={this.props.contenImg} alt="" width="1100" height="500"/>
            <div className="carousel-caption" id="cc1">
                <h3>{this.props.contentCategory}</h3>
                <br/>
                <p>{this.props.contentTitle}</p>
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
