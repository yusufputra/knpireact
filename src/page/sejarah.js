import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Sejarah extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <link rel="stylesheet" href="/css/Sejarah KNPI.css"></link>
        <div className="container" id="title">
            <div className="title">
                <h1>Sejarah KNPI</h1>
            </div>
            <div className="logo">
                <img src="/image/knpi-logo-ok.png" alt=""/>
            </div>
            <div className="sejarah-text">
                <p><b>Komite Nasional Pemuda Indonesia</b>, atau lebih populer dengan singkatan KNPI, adalah organisasi kepemudaan yang awalanya merupakan gabungan dari kelompok Cipayung, binaan kader Golkar dan tentara melalui deklarasi yang dipimpin oleh David Napitulu pada tanggal 23 Juli 1973.</p>
                <p>Organisasi ini lahir melalui Deklarasi Pemuda Indonesia pada hari yang sama dengan maksud menumbuhkan, meningkatkan, dan mengembangkan kesadaran sebagai suatu bangsa yang merdeka dan berdaulat berdasarkan Pancasila dan Undang-undang Dasar 1945. Organisasi ini langsung mendapat restu dari pemerintahan orde baru dan pada tahun itu pula, mereka mengikuti unjuk rasa mahasiswa dalam penentangan masuknya modal asing. Tahun berikutnya, mereka juga turut serta dalam demonstrasi Malari. Anggota KNPI banyak yang akhirnya bergabung dengan Golkar.</p>
                <p>Meskipun dianggap sebagai bagian dari Orde Baru dan sempat diusulkan untuk dibubarkan, namun KNPI tetap bertahan hingga setelah jatuhnya Suharto pada tahun 1998. Setelahnya, Idrus Marham terpilih sebagai Ketua Umum. Ia mewacanakan rejuvenasi KNPI atau penyegaran kembali peran KNPI di tengah realitas politik nasional. Rejuvenasi ini akhirnya memaksa KNPI untuk independen dan kembali memposisikan pemuda sebagai mitra kritis pemerintah. [wikipedia.org]</p>
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

export default Sejarah
