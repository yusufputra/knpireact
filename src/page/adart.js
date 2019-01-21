import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Adart extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <link rel="stylesheet" href="/css/ad-art.css"/>
        <div className="container" id="title">
		<div className="title">
			<h1>AD-ART</h1>
			<p>AD/ART dapat diakses melalui tautan berikut ini : </p>
			<a href="">Akte Perubahan AD ART KNPI No 92 Thn 2015.pdf</a>
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

export default Adart
