import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
				<img src="/img/ace-1807511_1280.jpg" alt="" width="1100" height="500" />
				<div className="carousel-caption" id="cc1">
					<h3>Categories</h3>
					<br />
					<p>Some Caption Text</p>
				</div>
			</div>
			<div className="carousel-item">
				<img src="/img/barack-obama-1174489_960_720.jpg" alt="" width="1100" height="500" />
				<div className="carousel-caption" id="cc2">
					<h3>Categories</h3>
					<br />
					<p>Some Caption Text</p>
				</div>
			</div>
			<div className="carousel-item">
				<img src="/img/horse-1413604_1280-717x401.jpg" alt="" width="1100" height="500" />
				<div className="carousel-caption" id="cc3">
					<h3 className="h3">Categories</h3>
					<br />
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
			<div className="col-sm-4">
				<div className="featured-news">
					<a href=""><img src="/img/pagatan_beach-wallpaper-2560x2048.jpg" alt="" id="fn-1" /></a>
					<div className="carousel-caption" id="capt1">
				Some Caption Here
				</div>
				</div>
			</div>
			<div className="col-sm-4">
				<div className="featured-news">
					<a href=""><img src="/img/football-461340_1280.jpg" alt="" id="fn-2" /></a>
					<div className="carousel-caption" id="capt2">
				Some Caption Here
				</div>
				</div>
		  </div>
			<div className="col-sm-4">
				<div className="featured-news">
					<a href=""><img src="/img/football-801047_1280.jpg" alt="" id="fn-3" className="img-fluid" /></a>
					<div className="carousel-caption" id="capt3">
				Some Caption Here
				</div>
				</div>
		  </div>
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
					<div className="row">
						<div className="col-sm-12">
							<div className="news-box">
								<a href=""><img src="/img/pexels-photo-39811.jpeg" alt="" /></a>
							</div>
						</div>
					</div>
				</div>
				<div className="col-sm-4">
					<div className="widget-area">
						<aside id="kategori-text">
							<h4>KATEGORI</h4>
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
