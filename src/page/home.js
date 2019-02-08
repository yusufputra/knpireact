import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FeatImg from '../component/featImg'
import BeritaComp from '../component/beritaComp'
import CarImg from '../component/carImg'
import Sidebar from '../component/sidebar'

export class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
	  loading: false,
	  num: 0,
      errorMessage: "",
      data:[]
	}
  }
  componentDidMount(){
	  
    fetch('http://localhost:5000/pubs/getContent',{
      headers:{
        'content-type':'application/json'
      },
    }).then(result=>{
	  return result.json();
	  console.log(result.json())
    }).then(data=>{
	  this.setState({data:data});
	  
    })
    console.log(this.state.data)
  }

  render() {
    return (
      <div>
        <div id="jumbotron-slide" className="carousel slide" data-ride="carousel">
		<ul className="carousel-indicators">
			<li data-target="#jumbotron-slide" data-slide-to="0" className="active"></li>
			<li data-target="#jumbotron-slide" data-slide-to="1"></li>
			<li data-target="#jumbotron-slide" data-slide-to="2"></li>
		</ul>
		<div className="carousel-inner">
			{ 
			this.state.data.map((content,index)=>{
				return index === 0 ?
				<CarImg {...content} ind={index} className={'active'}/> :<CarImg {...content}/>
			})}
			
		</div>
		<a className="carousel-control-prev" href="#jumbotron-slide" data-slide="prev"> <span className="carousel-control-prev-icon"></span>
		</a>
		<a className="carousel-control-next" href="#jumbotron-slide" data-slide="next"> <span className="carousel-control-next-icon"></span>
		</a>
	</div>
	<div className="container">
		<div className="row">
			<div className="col-sm-2">
				<h4>Featured News</h4>
			</div>
			</div>
		<div className="row">
			{this.state.data.map((content,index)=>(
				 <FeatImg {...content}/>
			))}

		</div>
	</div>
  <div className="container-fluid" id="welcome-text">
		<p>Selamat Datang di Situs Resmi KNPI Kota Malang</p>
  </div>
	<section className="main-content">
		<div className="container">
			<div className="row">
				<div className="col-sm-8">
					<h4 id="berita">BERITA TERBARU</h4>
					{this.state.data.map((content,index)=>(
						<BeritaComp {...content}/>
				   ))}
					
				</div>
				<Sidebar></Sidebar>
			</div>
		</div>
</section>
      </div>
    )
  }
}


export default Home
