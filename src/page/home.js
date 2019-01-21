import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FeatImg from '../component/featImg'
import BeritaComp from '../component/beritaComp'
import GaleriComp from '../component/galeriComp'
import { connect } from 'react-redux'

export class Home extends Component {
  static propTypes = {
    prop: PropTypes
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
			<div className="carousel-item active">
				<img src="/img/ace-1807511_1280.jpg" alt="" width="1100" height="500"/>
				<div className="carousel-caption" id="cc1">
					<h3>Categories</h3>
					<br/>
					<p>Some Caption Text</p>
				</div>
			</div>
			<div className="carousel-item">
				<img src="/img/barack-obama-1174489_960_720.jpg" alt="" width="1100" height="500"/>
				<div className="carousel-caption" id="cc2">
					<h3>Categories</h3>
					<br/>
					<p>Some Caption Text</p>
				</div>
			</div>
			<div className="carousel-item">
				<img src="/img/horse-1413604_1280-717x401.jpg" alt="" width="1100" height="500"/>
				<div className="carousel-caption" id="cc3">
					<h3 className="h3">Categories</h3>
					<br/>
					<p>Some Caption Text</p>
				</div>
			</div>
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
			<FeatImg></FeatImg>
			<FeatImg></FeatImg>
			<FeatImg></FeatImg>
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
					<BeritaComp></BeritaComp>
					<BeritaComp></BeritaComp>
					<BeritaComp></BeritaComp>
					
				</div>
				<div className="col-sm-4">
					<div className="widget-area">
						<aside className="kategori">
							<h4>KATEGORI</h4>
							<div className="kategori-text">
								<a href="#"><p>Archive</p></a>
								<a href="#"><p>Daerah</p></a>
								<a href="#"><p>Nusantara</p></a>
								<a href="#"><p>Suara Muda</p></a>
								<a href="#"><p>Suara Pemerintah</p></a>
								<a href="#"><p>Uncategorized</p></a>
							</div>
						</aside>
						<aside className="side-gallery">
							<h4>GALERI</h4>
							<div className="row">
								<GaleriComp></GaleriComp>
								<GaleriComp></GaleriComp>
								<GaleriComp></GaleriComp>
							</div>
							<div className="row">
								<GaleriComp></GaleriComp>
								<GaleriComp></GaleriComp>
								<GaleriComp></GaleriComp>
							</div>
						</aside>
					</div>
				</div>
			</div>
		</div>
</section>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default Home
