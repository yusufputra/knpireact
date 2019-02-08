import React, { Component } from 'react'
import PropTypes from 'prop-types'
import HotTopics from '../component/hotTopics'
import NewsComp from '../component/newsComp'
import { connect } from 'react-redux'

export class NewsDaerah extends Component {
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
    fetch('http://localhost:5000/pubs/getContent',{
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
            <link rel="stylesheet" href="/css/News Daerah.css"/>
            <div className="container">
        <div className="row">
            <div className="col-sm-9">
                <h3>KNPI NEWS</h3>
                <h5>Kategori Daerah</h5>
                {this.state.content.map(content=>(
                  <NewsComp {...content} />
                ))}
            </div>
            <HotTopics></HotTopics>
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

export default NewsDaerah
