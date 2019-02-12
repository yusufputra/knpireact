import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Sidebar from '../component/sidebar'
import Filecomp from '../component/filecomp';

export class Unduh extends Component {
  static propTypes = {
    prop: PropTypes
  }
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      errorMessage: "",
      content:[]
    }

  }
  componentDidMount(){
    fetch('http://localhost:5000/pubs/getFiles',{
      headers:{
        'content-type':'application/json'
      },
    }).then(result=>{
      return result.json();
    }).then(data=>{
      this.setState({content:data});
    })
    console.log(this.state.content)
  }

  render() {
    return (
      <div>
        <link rel="stylesheet" href="/css/Unduh.css"/>
        <section class="main-content">
            <div class="container" id="content">
                <div class="row">
                    <div class="col-sm-8">
                        <h4 id="berita">UNDUH</h4>
                        <p>Berikut adalah dokumen resmi dari KNPI yang dapat di Unduh :</p>
                        <div class="row">
                        {this.state.content.map(data=>(
                          <Filecomp {...data}></Filecomp>
                        ))}                            
                        </div>
                    </div>
                    <Sidebar></Sidebar>
                </div>
            </div>
        </section>
      </div>
    )
  }
}


export default Unduh
