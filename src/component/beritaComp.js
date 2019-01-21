import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class BeritaComp extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
        <div className="row">
            <div className="col-sm-5">
                <div className="news-box">
                    <a href=""><img src="/img/pexels-photo-39811.jpeg" alt=""/></a>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="news-text">
                    <h5>Some Title Here</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed elementum, ex in euismod bibendum, velit massa 
                    vulputate ligula, vitae facilisis massa sem a justo.</p>
                    <a href="#">Read More &#8811;</a>
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

export default BeritaComp
