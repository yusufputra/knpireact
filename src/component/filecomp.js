import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Filecomp extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div class="col-sm-12">
          <div class="unduhan">
              <img src="image/Pdf.png" alt="" class="thumb"/>
              <a href={this.props.fileLink} download>
                  <p>{this.props.filesName}</p>
              </a>
          </div>
      </div>
    )
  }
}


export default Filecomp
