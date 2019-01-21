import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class GaleriFoot extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
        <div className="col-sm-4">
            <div className="gallery-icon">
                <a href="#">
                    <img src="/img/pagatan_beach-wallpaper-2560x2048.jpg" alt="" />
                </a>
            </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default GaleriFoot
