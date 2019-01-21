import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Visimisi extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <link rel="stylesheet" href="/css/Visi Misi.css"/>
        <div className="container" id="title">
            <div className="title">
                <h1>Visi-Misi dan Program Strategis KNPI Kota Malang</h1>
            </div>
            <div className="logo">
                <img src="/image/knpi-logo-ok.png" alt=""/>
            </div>
            <div className="visimisi-text">
                <p><b>Visi</b></p>
                <p className="indent-text">
                    <em>“Terwujudnya KNPI Kota Malang sebagai lokomotif pemuda dalam pembangunan yang berwawasan keislaman dan kebangsaan dalam identitas keacehan.”</em>
                </p>
                <p><b>Misi</b></p>
                <ol>
                    <li>Menjadikan KNPI Kota Malang sebagai “Rumoh Rayeuk Bersama” organisasi kepemudaan dalam sharing and connecting ide atau gagasan-gagasan kepemudaan dan pembangunan.</li>
                    <li>Menjadikan KNPI Kota Malang sebagai pusat fasilitasi gerakan kepemudaan, gerakan sosial kemasyarakatan, gerakan politik kebangsaan, gerakan kebencanaan dan resolusi sosial konflik yang membangun kemandirian OKP.</li>
                    <li>Menjadikan KNPI Kota Malang sebagai katalisator, fasilitator dan motivator kepemudaan kreatif.</li>
                    <li>Mendorong berkembangnya budaya kepemimpinan berbasis kesadaran keislaman, keacehan dan keindonesiaan yang mendonya dikalangan kepemudaan.</li>
                    <li>Menjadi mitra profetik pemerintah Aceh dan nasional dalam menjaga perdamaian Kota Malang sesuai dengan spirit MoU Helsinki, UUPA, dasar negara, dan kesadaran-kesadaran kerakyatan universal lainnya.</li>
                </ol>
                <p><b>Program Strategis</b></p>
                <ol>
                    <li>Membangun silahturahmi pemuda Aceh untuk mewujudkan harmonisasi, aktualisasi, dan juga memberi motivasi kepeloporan kepemudaan antar sesama OKP di Kota Malang, Nasional, dan Internasional dalam Gerakan S-PAHAM (Silahturahmi Pemuda Aceh untuk Harmonisasi, Aktualisasi dan Motivasi).</li>
                    <li>Membangun dan memperkuat koordinasi kepemudaan dengan Kepala Pemerintahan Kota Malang dalam program-program kepemudaan sekaligus membangun inisiasi bersama dalam rangka membangun kemandirian OKP.</li>
                    <li>Mengembangkan program enterprenership dan leadership dikalangan pemuda agar pemuda memiliki pilar kemandirian, daya saing, dan peradaban yang mulia (youth civilization).</li>
                    <li>Menjaga, merawat, dan melanjutkan gerakan perdamaian Kota Malang melalui penghayatan dan pemasyarakatan spirit MoU Helsinki.</li>
                    <li>Membangun karakter pemuda yang lebih islami dalam membangun semangat nasional, kecendikiaan dan kemandirian pemuda.</li>
                </ol>
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

export default Visimisi
