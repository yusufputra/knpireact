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
                    <a href={"/news/view?"+this.props.contentId}><img src={this.props.contenImg} alt=""/></a>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="news-text">
                    <h5>{this.props.contentTitle}</h5>
                    <p>{this.props.contentIsi}</p>
                    <a href={"/news/view?"+this.props.contentId}>Read More &#8811;</a>
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
